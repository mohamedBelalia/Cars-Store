import { Offcanvas, Stack } from "react-bootstrap"
import { useCarsShopping } from "../context/CarsShoppingContext"
import CarCardShopped from "./CarCardShopped"
import { formatCurrency } from "../utilities/formatCurency"
import carsData from "../data/items.json"

type ShoppingCartProp = {
    isOpen : boolean
}

const ShoppingCart = ({isOpen}:ShoppingCartProp) => {
    const {closeCart , cars} = useCarsShopping()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end" style={{width:"700px"}}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Your Amazing Cars</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="mx-4">
            <Stack gap={3}>
                {
                    cars.map(car=>(
                        <CarCardShopped key={car.id} {...car} />
                    ))
                }
                <div className="ms-auto fw-bold fs-5">
                    Total {" "}
                    {
                        formatCurrency(
                            cars.reduce((total , cartCar) => {
                                const car = carsData.find(car => car.id === cartCar.id)

                                return total + (car?.price || 0) * cartCar.quantity
                            },0)
                        )
                    }
                </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart