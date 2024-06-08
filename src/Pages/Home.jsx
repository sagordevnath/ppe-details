// import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';




function Home() {
  return (
    <div className='home hero'>
      <section className="bsb-hero-1 px-3 bsb-overlay bsb-hover-pull hero">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
              <h5 className="display-5 fw-bold mt-20 text-light">Welcome to </h5>
              <h6 className='display-6 fw-bold mb-3 text-light'>Property, Plant and Equipment Summary</h6>
              <p className="lead my-14 text-light">"Property, plant, and equipment are not just assets on a balance sheet; they're the tangible foundations of a company's operations, the machinery of progress, and the infrastructure of growth."</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-14">
                <Link to='/basicInput' type="button" className="btn bsb-btn-xl btn-outline-light gap-3">Create Now</Link>
                <Link to='/blog' type="button" className="btn bsb-btn-xl btn-outline-light">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


export default Home;
