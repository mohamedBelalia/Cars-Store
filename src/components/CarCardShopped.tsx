import { Button, Stack } from "react-bootstrap"
import { useCarsShopping } from "../context/CarsShoppingContext"
import carsData from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurency"

type CarsProps = {
    id:number 
    quantity:number
}

const CarCardShopped = ({id , quantity}:CarsProps) => {
    const {removeCar} = useCarsShopping()

    const car = carsData.find(car => car.id === id)

    if(car == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
        <img src={car.imgUrl} style={{width:"125px" , height:"75px" , objectFit:"cover"}}/>
        <div className="me-auto">
            <div>
                {car.name} {quantity > 1 && <span className="text-muted">x{quantity}</span>}
            </div>
            <div className="text-muted" style={{color:"green" , fontSize:"bold"}}>
                {formatCurrency(car.price)}
            </div>
        </div>
        <div>
        {formatCurrency(car.price * quantity)}
        </div>
        <Button variant="danger" size="sm" onClick={()=>removeCar(car.id)}>X</Button>
    </Stack>
  )
}

export default CarCardShopped