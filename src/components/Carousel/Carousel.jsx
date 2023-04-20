import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello12.png';
import Pencil from '../images/Pencil.jpg';

class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id='start'>
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img className={classes.image} src={Hello} alt='myImage' />
            <div className={classes.h1}>
              <h1>I'm Dhanvanth Roshan</h1>
              <a
                href='https://docs.google.com/document/d/13pm5yTo9goywN9cC3sonovy2ImvkAmm8-om3af2VB-I/edit?usp=share_link'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img className={classes.image} src={Pencil} alt='myImage' />
            <div className={classes.h2}>
              <h1> I love building</h1>
              <h1>THINGS!!</h1>
              <a
                href='https://github.com/Dhanvanth-ROSHAn'
                rel='opener noreferrer'
                target='_blank'
              >
                VIEW REACT PROJECTS <GoProject />
              </a>
              <div className={classes.secondButton}>
                <a
                  href='https://github.com/Dhanvanth-ROSHAn'
                  rel='opener noreferrer'
                  target='_blank'
                >
                  VIEW ANDROID PROJECTS <GoProject />
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default CarouselImages;
