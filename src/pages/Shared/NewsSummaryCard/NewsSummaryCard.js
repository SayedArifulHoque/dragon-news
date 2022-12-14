import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, rating, total_view, price,day } = news
    console.log(news)
    return (
        <Card className=" mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{height:'60px'}}
                    ></Image>
                    <div className='me-6 mt-1'>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='text-center fs-1 fw-bold text-secondary mb-4'>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ? <p>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read Mor</Link></p>
                            :
                            <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <div className='d-flex justify-content-between p-3'>
                <div className='fs-4 fw-semibold text-secondary'>Price:$ {price}Tk</div>
                <div className='bg-warning p-2 rounded-2 fs-5 fw-semibold'>{day}<span className=' '>Month</span></div>
            </div>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
                <Link to='/pdf'><Button>BUY NOW PDF</Button></Link>
            </Card.Footer>
            
        </Card>
    );
};

export default NewsSummaryCard;