import { Row , Col } from "react-bootstrap"
import carsData from "../data/items.json"
import CarCard from "../components/CarCard"
import { Container } from "react-bootstrap"


const Store = () => {
  return (
    <Container className="mb-4">
      <h1>Cars Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">

        {
          carsData.map(item=>(
            <Col key={item.id}>
              <CarCard {...item} />
            </Col>
          ))
        }

      </Row>
    </Container>
  )
}

export default Store