import React, { useState } from 'react';
import "./gallery.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import {Footer} from "./Footer";

const images = [
    "https://media.istockphoto.com/id/1248963859/photo/pig-farms-in-confinement-mode.jpg?s=612x612&w=0&k=20&c=WvY9pkZW75vzmevYzXxTSKo9oe1I5KjL4v1djBXtbUg=",
    "https://wiuag.wordpress.com/wp-content/uploads/2018/04/na31657658.jpg?w=1200",
    "https://media.istockphoto.com/id/1845746926/photo/pig-farming.jpg?s=612x612&w=0&k=20&c=raY3BtTYbKan3UzydiRVbF5dilrQ4qpvHVeNy2bQpV4=",
    "https://media.nfuonline.com/uploaded_files/_media/412/4d131e2e-164e-4b17-8836-43c9caa41298_800.jpg?ratio=1.875&width=800&scale=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6-Qwa-6Ru8gjS6B3f0rCEqREhP6-70laLQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-oPnmzhi_03imIyfq5JZtFLfzQg9q6GfkA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxigiALtdci8O8EZKRJ7CxkoMfoPXgg4ZkA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR89BspOo8Djnyxc2vtZhZzGrfSJFJnXHbkEw&s",
    "https://upload.wikimedia.org/wikipedia/commons/1/1e/JEFO-Pigs.jpg"]


const Gallery = () => {

    const [data, setData] = useState({ img: '', i: 0 })
    const viewImage = (img, i) => {
        setData({ img, i })
    }
    const imgAction = (action) => {
        let i = data.i
        if (action === 'next-img') {
            setData({ img: images[i + 1], i: i + 1 })
        }
        if (action === 'prev-img') {
            setData({ img: images[i - 1], i: i - 1 })
        }
        if (!action) {
            setData({ img: '', i: 0 })
        }
    }

    return (<>
    <div className="about-section" style={{}}>
        <h1>Gallery</h1>
      </div>
        {data.img &&
            <div className='view-image-container' >
                <button className='xmark' onClick={() => imgAction('')}><FontAwesomeIcon icon={faXmark} /></button>
                <button onClick={() => imgAction('prev-img')}><FontAwesomeIcon icon={faChevronLeft} />prev</button>
                <img src={data.img} />
                <button onClick={() => imgAction('next-img')}><FontAwesomeIcon icon={faChevronRight} />next</button>

            </div>
        }
        <div>
            <div className='gallery-container'>

                {images.map((image, i) => (
                    <img className='inner-image-style'
                    style={{cursor:"pointer"}}
                        key={i}
                        src={image}
                        // style={{ width: "100%", display: "block", cursor: 'pointer' }}
                        alt=""
                        onClick={() => viewImage(image, i)}
                    />
                ))}

            </div>
        </div>
        <Footer/>
    </>
    )
}

export default Gallery

