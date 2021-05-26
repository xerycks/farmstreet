import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/navbar'
import fetch from 'isomorphic-unfetch'
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';
import { redirect } from 'next/dist/next-server/server/api-utils';

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
            <Navbar />
            <div className="pt-24">
                <div className="container-lg max-w-screen-xl">        
                    <div className="row g-6 align-items-center">
                        <div className="col-lg-7 mx-auto text-lg-center">                
                            <h1 className="ls-tight font-bolder display-4 mb-7 col">
                                <span className="text-success">FarmStreeT</span> <br /> <span className="h1 font-bolder">Crowd Funding for Farmers of India</span>
                            </h1>                
                            <p className="lead mb-12">
                                Invest in the "Mehnat" of Farmers and see a great ROI on the crops that you invested in, with upto ~29% ROI. Aur bhi bohot bade bade waade jinse log invest karne aa jayein
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
            <section className="py-24">
    <div className="container max-w-screen-xl">        
        <div className="row justify-content-center text-md-center mb-24">
            <div className="col-lg-7">                
                <h5 className="h5 mb-5 text-uppercase text-primary">
                    ABOUT FARMSTREET
                </h5>                
                <h1 className="ls-tight font-bolder mb-5">
                    JAI JAWAAN ! JAI KISAAN !
                </h1>                
                <p className="lead">
                    Badhega India Tabhi toh Padhega India . . . Ghanta Padhega India. Aur 2-3 lines likhni h taaki content achha ho aur subhadha maa'm impress ho jaye, or class kam attend karne ke marks na cut kare.
                </p>
            </div>
        </div>        
        <div className="row g-10">
            <div className="col-md-4 mb-5 mb-md-0">                
                <div className="icon icon-shape icon-lg bg-primary text-white text-lg rounded-circle mb-7">
                    <i class="bi bi-emoji-smile-upside-down"></i>
                </div>                
                <h5 className="h4 font-semibold mb-2">Invest Fayda No.1</h5>                
                <p className="lh-relaxed">
                    Kuchh bhi batana bata dena, aise fayde batana ki client apna 1crore cypto ki jagah yahaan lagaye.
                </p>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">                
                <div className="icon icon-shape icon-lg bg-primary text-white text-lg rounded-circle mb-7">
                    <i class="bi bi-emoji-smile-upside-down"></i>
                </div>                
                <h5 className="h4 font-semibold mb-2">Invest Fayda No.2</h5>                
                <p className="lh-relaxed">
                    Kuchh bhi batana bata dena, aise fayde batana ki client apna 20crore FAANG ki jagah yahaan lagaye.
                </p>
            </div>
            <div className="col-md-4 mb-5 mb-md-0">                
                <div className="icon icon-shape icon-lg bg-primary text-white text-lg rounded-circle mb-7">
                    <i class="bi bi-emoji-smile-upside-down"></i>
                </div>                
                <h5 className="h4 font-semibold mb-2">Invest Fayda No.3</h5>                
                <p className="lh-relaxed">
                    Kuchh bhi batana bata dena, aise fayde batana ki client apna 50L DogeCoin ki jagah yahaan lagaye.
                </p>
            </div>
        </div>
    </div>
</section>
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
