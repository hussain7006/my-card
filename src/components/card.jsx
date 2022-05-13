import React from 'react'
import { Button, Col, Card, CardGroup } from 'react-bootstrap';

function MyCard(props) {

    let {title, price, category, desc, img, click } = props;
    return (
        // <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={`${img}` } />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {desc}
                        </Card.Text>
                        <Card.Text>
                            {price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        <Button onClick={()=>click(props)}>Add to Cart</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        // </div>
    )
}

export default MyCard;