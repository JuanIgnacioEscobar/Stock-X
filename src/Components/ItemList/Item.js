import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Style/item.css';

const Item = ({img, title, precio, id}) => {
    
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Link to={`/Item/${id}`} className='LinkCard'>
                            <Card style={{ width: '18rem', height: '40rem' }} className="Card">
                                <Card.Img variant="top" src={img} style={{height: '200px'}} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Card.Text>{precio}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Item