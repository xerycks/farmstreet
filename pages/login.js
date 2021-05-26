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
    <form onSubmit={handleSubmit}>
      <p>Login</p>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="Submit" />
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
    </form>
  );
};

export default Login;

// const Login = () => {
//     return ( 
//         <>
//         <Navbar />
//         <div className="pt-24 pb-32">
//     <div className="container-lg max-w-screen-xl">        
//         <div className="row g-6 align-items-center">
//             <div className="col-lg-7 mx-auto text-lg-center">                
//                 <h1 className="ls-tight font-bolder display-4 mb-7 col">
//                     <span className="text-success">FarmStreeT</span> - Stock Market of Farmers of India
//                 </h1>                
//                 <p className="lead mb-12">
//                     Invest in the "Mehnat" of Farmers and see a great ROI on the crops that you invested in, with upto ~29% ROI. This
//                 </p>                    
//                 <form className="w-2/3 mx-auto">
//                     <div className="rounded px-2 py-2 border shadow">
//                         <div className="row">
//                             <div className="col">
//                                 <input type="email" name="email" className="form-control pl-3 shadow-none bg-transparent border-0" placeholder="Enter your email address" />
//                             </div>
//                             <div className="col-auto">
//                                 <button type="submit" className="btn btn-block btn-dark">Notify me</button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div>
//         </>
//      );
// }
 
// export default Login;