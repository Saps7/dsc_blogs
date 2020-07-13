import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    
    <div className="container">
      <Head>
      <meta charSet="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>DSC NSEC blogs!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <main>
        
        <h1 className="title">
        <img src="/dsc.png" alt="dsc Logo" className="logo" />
          DSC NSEC BLOGS-<i id="s">Write Your Own Story!</i>
        </h1>
        <br></br>
        <br></br>
        <p className="description">
          We, at DSC NSEC, believe that everyone has a unique story to tell to the world- a story about them,how they reached success, how they never gave up, what challenges did they face, what was the final outcome. So we can came up with our blog platform <i id="pro">DSC NSEC blogs!</i> to help reach your stories to the world, to encourage more people in their journey. So, let's start writing !
        </p>
        <img src="/book.jpg" alt="blog" id="book" />
        <br></br>
        <img src="/create.jpg" alt="blog" id="create" />
        
        <div className="grid">
          <a href="https://dscnsec.com/" className="card">
            <h3>About us &rarr;</h3>
            <p>We are Developer Student Club of Netaji Subhash Engineering College, New Garia, Kolkata.</p>
          </a>

          <Link href="/signin"><a className="card">
            <h3>Log In &rarr;</h3>
            <p>Start your Blog Journey today!</p>
          </a></Link>
          <br></br>
        <br></br>
        <br></br>
        <div id="pr">
        <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
        Follow us:
        </Typography>
        <Link href="https://www.facebook.com/dscnsec"><a target="_blank"><Icon className="fa fa-facebook-f" /></a></Link>
        <Link href="https://twitter.com/dscnsec"><a target="_blank"><Icon className="fa fa-twitter" /></a></Link>
        <Link href="https://ig.me/dscnsec"><a target="_blank"><Icon className="fa fa-instagram" /></a></Link>
        <Link href="https://github.com/dscnsec"><a target="_blank"><Icon className="fa fa-github" /></a></Link>
        </div>
        </div>

      </main>

      <footer>
      
        <a
          href="https://dscnsec.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/dsc.png" alt="dsc Logo" className="logo"  height="300px" width="100px"/>
        </a>
      </footer>

      <style jsx>{`
      #pr{
        padding:1em 1em 1em 1em;
    }
      #pr a {
        margin-right: 30px;
     } 
      #create{
        display: block;
    margin-left: auto;
    margin-right: auto ;
    height:300px;
    width:600px;
      }
      #book{
        display: block;
    margin-left: auto;
    margin-right: auto ;
    height:300px;
    width:300px;
      }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        #s{
          animation: pulse 5s infinite;
        }
        @keyframes pulse {
          20% {
            color: red;
          }
          30%{
              color:blue; 
          }
          40%{
              color:green;
          }
          100% {
            color: yellow;
          }
        }
        #pro{
          color:blue;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
