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
          <Login />
        </>
      )}
    </div>
  );
}

export default Home;