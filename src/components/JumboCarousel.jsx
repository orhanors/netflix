import React from "react";
import { Carousel, Button } from "react-bootstrap";

class JumboCarousel extends React.Component {
  state = {
    index: 0,
  };

  handleSelect = e => {
    return this.setState({
      index: { e },
    });
  };

  render() {
    return (
      <Carousel className="w-50" style={{ heigth: "20%" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="danger">Watch now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400/?nature"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Button variant="danger">Watch now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/random/800x400?movie"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <Button variant="danger">Watch now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default JumboCarousel;
