import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cardimage from './components/cardimages/image.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import pigimage1 from "./components/cardimages/image.png";
import pigimage2 from "./components/cardimages/image2.jpg";
import pigimage3  from "./components/cardimages/image3.jpg";
import pigimage4  from "./components/cardimages/image4.jpg";
import pigimage5  from "./components/cardimages/image5.jpg";





function CardPage() {
    const Data = [
        {
            title: "Hampshire",
            text: "Hampshire, breed of pig developed in the United States from the Wessex Saddleback and other varieties first imported from England around 1825. ",
            img:pigimage1

        }, {
            title: "Duroc",
            text: "The breed, one of several red pig strains which developed around 1800 in New England, originated in Africa.",
            img:pigimage2

        }
        , {
            title: "Landrace pig",
            text: "Another suggestion is that the red color came from the Berkshire pig from Britain",
            img:pigimage3

        },
        {
            title: "Berkshire pig",
            text: "The Berkshire is a British breed of pig. It originated in the English county of Berkshire,  for which it is named. It is normally black,with some white on the snout, on the lower legs.",
            img:pigimage4

        },
        {
            title: "Ghungroo",
            text: "Ghungroo (GR) is a native pig breed which is mainly reared by the tribes of Duars' Valley and allied zone in India. Higher prolificacy, faster growth rate.",
            img:pigimage5

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

