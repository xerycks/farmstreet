import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/navbar'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';
import Login from "../pages/login"

function Home() {
  const {data, revalidate} = useSWR('/api/me', async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (

    <div>
      {loggedIn && (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-0 py-3">
                <div className="container-xl">       
                    <h1 className="h2 text-success font-bolder" href="#">
                        FarmStreeT
                    </h1>       
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>       
                    <div className="collapse navbar-collapse" id="navbarCollapse">           
                        <div className="navbar-nav mx-lg-auto">
                            <a className="nav-item nav-link active" href="/dashboard" aria-current="page">Dashboard</a>
                            <a className="nav-item nav-link" href="/portfoliio">Portfolio</a>
                            <a className="nav-item nav-link" href="/news">News</a>
                        </div>           
                        <div className="navbar-nav ms-lg-4">
                            <a onClick={() => {cookie.remove('token');revalidate();}} className="btn btn-sm btn-outline-success" href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mt-5 mb-3">
                <div className="row">
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    <a  className="col-md-6 col-lg-4 p-4">
                        <div>
                        <div className="card p-3 mb-2">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                    <div className="icon"> <i className="bi bi-mailchimp"></i> </div>
                                    <div className="ms-2 c-details">
                                        <h6 className="mb-0 text-sm font-bold">Raghuvindra Singh</h6>
                                    </div>
                                </div>
                                <div className="badge"> <span className="rounded-pill bg-soft-success text-dark">+4.95%</span> </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="heading">Senior Product<br/>Designer-Singapore</h3>
                                <div className="mt-5">
                                    <div className="progress">
                                        <progress className="progress-bar" value="100" max="200"></progress>
                                    </div>
                                    <div className="mt-3"> <span className="text1">₹ 4,50,000 <span className="text2">/ 1000000</span></span> </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    </a>
                    
                </div>
            </div>
          <p>Welcome {data.email}!</p>
        </div>
      )}
      {!loggedIn && (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default Home;