const Navbar = () => {
    return ( 
        <>
          <nav className="navbar navbar-expand-lg navbar-light px-0 py-3">
    <div className="container-xl max-w-screen-xl">        
        <h1 className="navbar-brand text-lg font-bolder" href="#">
            FarmStreeT
        </h1>        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>        
        <div className="collapse navbar-collapse" id="navbarCollapse">            
            <ul className="navbar-nav mx-lg-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#howthisworks">How This Works ?</a>
                </li>
            </ul>            
            <div className="navbar-nav ms-lg-4">
                <a className="nav-item nav-link" href="/signup">Register Now</a>
            </div>            
            <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
                <a href="/login" className="btn btn-sm btn-primary w-full w-lg-auto">
                    Login
                </a>
            </div>
        </div>
    </div>
</nav>
        </>
     );
}
 
export default Navbar;