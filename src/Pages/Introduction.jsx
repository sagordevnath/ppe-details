import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';


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
        <Link to='/land' className="btn btn-outline-success mb-2">1. Land</Link>
        <Link to='/buildings' className="btn btn-outline-success mb-2">2. Buildings</Link>
        <Link to='/plant-machinery' className="btn btn-outline-success mb-2">3. Plant and Machinery</Link>
        <Link to='/furniture' className="btn btn-outline-success mb-2">4. Furniture and Fixture</Link>
        <Link to='/office-equipment' className="btn btn-outline-success mb-2">5. Office Equipment</Link>
        <Link to='/electrical-equipment' className="btn btn-outline-success mb-2">6. Electrical Equipment</Link>
        <Link to='/automobiles' className="btn btn-outline-success mb-2">7. Automobiles</Link>
        <Link to='/assets-under-construction' className="btn btn-outline-success mb-2">8. Assets Under Construction</Link>
      </ListGroup>
    </Card>
    </div>
  )
}
