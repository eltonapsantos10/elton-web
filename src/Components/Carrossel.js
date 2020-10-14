import React from 'react'
import {Carousel} from 'react-bootstrap'

export const Carrossel = (props) => {
return (
<React.Fragment>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../Assets/img/filme5.png")}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../Assets/img/foto8.png")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../Assets/img/panter1.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>







</React.Fragment>
)

}