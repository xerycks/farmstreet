import Navbar from '../component/navbar'
import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          Router.push('/dashboard');
        }
      });
  }
  return (
    <>
    <Navbar />
    <div className="container py-10">

        <div className="row">
            <div className="col-md-auto">

            <form className="m-5 loginform px-10 py-14" onSubmit={handleSubmit}>
                <div class="mb-5">
                    <label class="form-label text-success" for="email">Email address</label>
                    <input name="email" type="email" class="form-control" id="email" placeholder="Your email address" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="form-label text-success" for="password">Password</label>
                    <input name="password" type="password" className="form-control" id="password" placeholder="Password" autocomplete="current-password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Login" className="btn btn-success w-full" />
                </div>
            </form>
            </div>
            <div className="col-md p-4">
                <h1 className="ls-tight font-bolder display-4 mb-7 col">
                    <span className="text-success font-bolder">FarmStreeT</span> - <span className="h0 font-bolder">Crowd Funding for Farmers of India</span>
                </h1>                
                <p className="lead text-lg mb-12">
                    Invest in the "Mehnat" of Farmers and see a great ROI on the crops that you invested in, with upto ~29% ROI. Aur bhi bohot bade bade waade jinse log invest karne aa jayein. JAI HO Project Based Learning.
                </p>
            </div>
        </div>
    </div>
    <div className="container max-w-screen-xl my-10 mb-14">
    <div className="row g-10">
            <div className="col-md-4 mb-5 mb-md-0">                
                <div className="icon icon-shape icon-lg bg-success text-white text-lg rounded-circle mb-7">
                    <i class="bi bi-emoji-smile-upside-down"></i>
                </div>                
                <h5 className="h4 font-semibold mb-2">Invest Fayda No.1</h5>                
                <p className="lh-relaxed">
                    Kuchh bhi batana bata dena, aise fayde batana ki client apna 1crore cypto ki jagah yahaan lagaye.
                </p>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">                
                <div className="icon icon-shape icon-lg bg-success text-white text-lg rounded-circle mb-7">
                    <i class="bi bi-emoji-smile-upside-down"></i>
                </div>                
                <h5 className="h4 font-semibold mb-2">Invest Fayda No.2</h5>                
                <p className="lh-relaxed">
                    Kuchh bhi batana bata dena, aise fayde batana ki client apna 20crore FAANG ki jagah yahaan lagaye.
                </p>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">                
                <div className="icon icon-shape icon-lg bg-success text-white text-lg rounded-circle mb-7">
                    <i class="bi bi-emoji-smile-upside-down"></i>
                </div>                
                <h5 className="h4 font-semibold mb-2">Invest Fayda No.3</h5>                
                <p className="lh-relaxed">
                    Kuchh bhi batana bata dena, aise fayde batana ki client apna 50L DogeCoin ki jagah yahaan lagaye.
                </p>
            </div>
        </div>
    </div>
    <footer className="footer mt-auto py-3 bg-success">
        <div className="container">
            <span className="text-white">Built by Xerycks 😉 !</span>
            <span className="float-end text-white">Copyright © Rishabh Rathore 2020</span>
        </div>
    </footer>
    </>

  );
};

export default Login;