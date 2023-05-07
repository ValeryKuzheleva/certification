import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from'react-router-dom';
import { Button } from 'react-bootstrap';

const Slider = () => {
  return (
      <Carousel>
      <Carousel.Item interval={1000}>
        <img width={420} height={520}
          className="d-block w-100"
          src="./img/slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Пора вырваться из душного мегаполиса</h3>
            <Link exact to={'/reviews'}>
              <Button variant="primary">
                Подробнее
              </Button> 
            </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={420} height={520}
          className="d-block w-100"
          src="./img/slider2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Отдых по всему миру, который вы заслужили</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={520}
          className="d-block w-100"
          src="./img/slider3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Незабываемые впечатления на год вперед</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider