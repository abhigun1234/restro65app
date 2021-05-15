import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Carousel from 'react-bootstrap/Carousel'
import '..//..//src/home.css';
class RestaurentHome extends Component {
    render() {
        return (
            <div>
                <div class="restrohome container">
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </Jumbotron>
                    <div class="menu">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                                className="d-block w-100"
                                src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/mdk5xbzi2jgiuaxpoyen"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://b.zmtcdn.com/data/reviews_photos/b5c/273829d752c73e2ee2d6a60f097fdb5c_1557303718.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://b.zmtcdn.com/data/pictures/6/19192896/32c49672a3a2e8e65b0bacac65821369.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurentHome;