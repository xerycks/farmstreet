import Navbar from '../component/navbar'

const Login = () => {
    return ( 
        <>
        <Navbar />
        <div className="pt-24 pb-32">
    <div className="container-lg max-w-screen-xl">        
        <div className="row g-6 align-items-center">
            <div className="col-lg-7 mx-auto text-lg-center">                
                <h1 className="ls-tight font-bolder display-4 mb-7 col">
                    <span className="text-success">FarmStreeT</span> - Stock Market of Farmers of India
                </h1>                
                <p className="lead mb-12">
                    Invest in the "Mehnat" of Farmers and see a great ROI on the crops that you invested in, with upto ~29% ROI.
                </p>                    
                <form className="w-2/3 mx-auto">
                    <div className="rounded px-2 py-2 border shadow">
                        <div className="row">
                            <div className="col">
                                <input type="email" name="email" className="form-control pl-3 shadow-none bg-transparent border-0" placeholder="Enter your email address" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-block btn-dark">Notify me</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
        </>
     );
}
 
export default Login;