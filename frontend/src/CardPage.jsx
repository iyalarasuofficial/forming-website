import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardimage from './components/cardimages/image.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import pigimage1 from "./components/cardimages/image.png"



function CardPage() {
    const Data = [
        {
            title: "title",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img:pigimage1

        }, {
            title: "title2",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img:pigimage1

        }
        , {
            title: "title2",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img:pigimage1

        },
        {
            title: "title2",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img:pigimage1

        },
        {
            title: "title2",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            img:pigimage1

        }
    ]
    const SmallCard=(props)=> {
        return (
            
            <Card style={{ width: '18rem' } } className='mb-5'>
                <Card.Img variant="top" src={props.image} alt='' />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.text}                    
                    </Card.Text>
                </Card.Body>
            </Card>
        
            

        );
  
    }
    return (
        <>
            {Data.map((data, index) =>
                <SmallCard key={index} title={data.title} text={data.text} image={data.img} />
            )}



        </>)
}
export default CardPage;

