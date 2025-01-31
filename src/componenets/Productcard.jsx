import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// c-Link from react router dom imported
import { Link } from 'react-router-dom';

// function Productcard(props) {
// c- to access the props
// c-item props is coing from the Homepage component
function Productcard({item}) {
  return (
    <Card >
      <Card.Img variant="top" src={item?.image} className='.productImage'/>
      <Card.Body>
        <Card.Title>{item?.title.slice(0,20)}</Card.Title>
        <Card.Text>
            {item?.description.slice(0,20)}
        </Card.Text>
        
        {/* c-link from router is imported and the exisiting button is placed here; inside the Link to is given to the direction element; we are using link here 
        for navigating;onclick is used when we need to bring in logics */}
        {/* c-using template literals to link string and js */}
        <Link to={`productdetails/${item.id}`}><Button variant="primary">View Product</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default Productcard