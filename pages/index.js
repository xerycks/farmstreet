import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/navbar'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';

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
      <Head>
        <title>Welcome to landing page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Simplest login</h1>

      <h2>Proudly using Next.js, Mongodb and deployed with Now</h2>
      {loggedIn && (
        <>
          <p>Welcome {data.email}!</p>
          <button
            onClick={() => {
              cookie.remove('token');
              revalidate();
            }}>
            Logout
          </button>
        </>
      )}
      {!loggedIn && (
        <>
          <Link href="/login">Login</Link>
          <p>or</p>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </div>
  );
}

export default Home;


// export default function Home() {
//   return (
//     <div classNameName="row">
// <Navbar />
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
//     </div>
//   )
// }
