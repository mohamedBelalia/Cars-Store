import { createContext , ReactNode , useContext, useState } from "react"
import ShoppingCart from "../components/ShoppingCart"

type CarsShoppingPropType = {
    children : ReactNode
}

type CarsShoppingContext = {
    openCart : () => void
    closeCart : () => void
    getCarsQuantity : (id:number) => number
    increaseCarsQuantity : (id:number) => void
    decreaseCarsQuantity : (id:number) => void
    removeCar : (id:number) => void
    carsQuantity : number
    cars : CarType[]
}

type CarType = {
    id:number 
    quantity:number
}

const CarsShoppingContext = createContext({} as CarsShoppingContext )

export function useCarsShopping(){
    return useContext(CarsShoppingContext)
}

export function CarsShoppingProvider({children}:CarsShoppingPropType){

    const [isOpen , setIsOpen] = useState(false)
    const [cars , setCars] = useState<CarType[]>([])
    
    const carsQuantity = cars.reduce((quantity , car) => car.quantity + quantity , 0)

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getCarsQuantity(id:number){
        return cars.find(car => car.id === id)?.quantity || 0 
    }

    function increaseCarsQuantity(id:number){
        setCars( currentCars => {
            if(currentCars.find(car => car.id === id) == null){
                return [...currentCars , {id , quantity:1}]
            }
            else{
                return currentCars.map(car => {
                    if(car.id === id){
                        return { ...car , quantity : car.quantity + 1}
                    }
                    else{
                        return car
                    }
                })
            }
        })
    }

    function decreaseCarsQuantity(id:number){
        setCars( currentCars => {
            if(currentCars.find(car => car.id === id)?.quantity === 1){
                return currentCars.filter(car => car.id !== id)
            }
            else{
                return currentCars.map(car => {
                    if(car.id === id){
                        return { ...car , quantity : car.quantity - 1}
                    }
                    else{
                        return car
                    }
                })
            }
        })
    }

    function removeCar(id:number){
        setCars(currentCars => {
            return currentCars.filter(car => car.id !== id)
        })
    }

    return (
        <CarsShoppingContext.Provider
            value={{
                getCarsQuantity , 
                increaseCarsQuantity , 
                decreaseCarsQuantity ,
                removeCar,
                openCart,
                closeCart,
                cars,
                carsQuantity
                }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </CarsShoppingContext.Provider>
    )
}
