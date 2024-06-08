import { Link } from "react-router-dom";
// import inputImage from '../assets/inputImage.jpg'


function BasicInput() {
    return (
        <section className="bg-success home hero">
            <div className="container-fluid overflow-hidden">
                <div className="row h-100 d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-6 order-1 order-md-0 align-self-md-end">
                        <div className="row py-3 py-sm-5 py-xl-9 mt-md-10 justify-content-sm-center">
                            <div className="col-12 col-sm-10">
                                <h1 className="display-2 fw-bolder mb-4 text-white my-10">Input Here</h1>
                                <div className="row mt-6">
                                    <div className="col-12 col-xxl-8">
                                        <div className="input-group">
                                            <span className="input-group-text">Company Name</span>
                                            <input type="text" aria-label="First name" className="form-control" />
                                        </div>
                                        <br />
                                        <div className="input-group">
                                            <span className="input-group-text">Company Address</span>
                                            <input type="text" aria-label="First name" className="form-control" />
                                        </div>
                                        <br />
                                        <div className="input-group">
                                            <span className="input-group-text">Year</span>
                                            <input type="number" aria-label="First name" className="form-control" />
                                        </div>
                                        <br />
                                    </div>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <Link to='/introduction' className="btn  btn-outline-light" type="button">Submit</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-md-6 p-0">
                        <img className="img-fluid w-100 h-100 object-fit-cover" loading="lazy" src={inputImage} alt="" />
                    </div> */}
                </div>
            </div>
        </section>
    );
}


export default BasicInput;

