import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Introduction() {
  return (
    <div className='d-flex justify-content-center my-4'>
    <Card className='border border-dark border-2' style={{ width: '30rem' }}>
      <Card.Header className='border-bottom-2'>
        <h5>Property, Plant and Equipment</h5>
      <p>of</p>
      <h5>RS Communication Limited</h5>
      <p>As at 30 June 2023</p>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>1. Land</ListGroup.Item>
        <ListGroup.Item>2. Buildings</ListGroup.Item>
        <ListGroup.Item>3. Plant and Machinery</ListGroup.Item>
        <ListGroup.Item>4. Furniture and Fixture</ListGroup.Item>
        <ListGroup.Item>5. Office Equipment</ListGroup.Item>
        <ListGroup.Item>6. Electrical Equipment</ListGroup.Item>
        <ListGroup.Item>7. Automobiles</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  )
}
