import { Card , Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurency"
import { useCarsShopping } from "../context/CarsShoppingContext"

type CarsCardTypes = {
    id : number
    name : string 
    price : number 
    imgUrl : string
}

const CarCard = ({id , name , price , imgUrl}:CarsCardTypes) => {
    const { getCarsQuantity , increaseCarsQuantity , decreaseCarsQuantity , removeCar } = useCarsShopping()
    let carsNbr = getCarsQuantity(id)
  return (
    <Card className="h-100">
        <Card.Img variant="top" src={imgUrl} height="200px" style={{objectFit:"cover"}} />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto">
                {
                    carsNbr === 0 ? <Button className="w-100 btn btn-dark" onClick={()=>increaseCarsQuantity(id)}>Add To Card</Button>
                    : <div className="d-flex align-items-center flex-column" style={{gap:".5rem"}}>
                        <div className="d-flex align-items-center justify-content-center" style={{gap:".5rem"}}>
                            <Button variant="dark" onClick={()=>decreaseCarsQuantity(id)}>-</Button>
                            <div>
                                <span className="fs-3">{carsNbr} cars</span>
                            </div>
                            <Button variant="dark" onClick={()=>increaseCarsQuantity(id)}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={()=>removeCar(id)}>Remove</Button>
                    </div>
                }
            </div>
        </Card.Body>
    </Card>
  )
}

export default CarCard