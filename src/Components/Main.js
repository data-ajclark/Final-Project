import React from 'react';
import {Card} from 'reactstrap';
import Carousel from './Carousel.js';
import { Col } from 'reactstrap';


export default function Main() {
  return(
    <div className='container'>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
      <Col lg="8">
        <Carousel />
      </Col>
      </div>
    <Card 
    style={{
      font: 'message-box',
      fontWeight: '300',
      fontSize: 'x-large',
      top: '2vh',
      backgroundColor: '#cee0ee',
      border: '2px black solid'
    }}>
      <h1><strong>Welcome to Mario World</strong></h1>
      One day the kingdom of the peaceful mushroom people was invaded by the Koopa, a tribe of turtles famous for their black magic. The quiet, peace-loving Mushroom People were turned into mere stones, bricks and even field horsehair plants, and the Mushroom Kingdom fell into ruin.
      The only one who can undo the magic spell on the Mushroom People and return them to their normal selves is the Princess Toadstool, the daughter of the Mushroom King. Unfortunately, she is presently in the hands of Bowser, the King of the Koopa.
      Mario hears about the Mushroom Peoples plight and sets out on a quest to free the Mushroom Princess from the evil Koopa and restore the fallen kingdom of the Mushroom People.
      You are Mario! Its up to you to save the Mushroom People from the black magic of the Koopa!
      <br></br>
      <br></br>
      Check out the other pages to learn more about Mario and his world.
    </Card>      
    </div>
  )
}
