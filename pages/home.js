import React, { useContext } from "react";
import Typography from '@material-ui/core/Typography';
import Head from "next/head"
import Link from 'next/link'
import {UserContext} from '../src/contexts/UserContext'
import ScrollableTabsButtonAuto from './feed'

function HomePage () {

    const context = useContext(UserContext)

    return (
        <>
    <Head>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
     <title>DSC NSEC BLogs!</title>
     <link rel="icon" href="https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico" />
   </Head>
   <h1 className="title">
        <img src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true" alt="dsc Logo" className="logo"/>
          <b>DSC NSEC BLOGS-<i id="s">Write Your Own Story!</i></b>
        </h1><br></br>
        <hr></hr>
        <ScrollableTabsButtonAuto/>

          <style jsx>{`
       #book1{
        float:left;
    height:50%;
    width:50%;
      }
      #pr34{
        padding:2em 2em 2em 2em;
        font-size:20px;
        font-family: Optimus Princeps;
        background-image:url("https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/light.jpg?raw=true");
        background-width:25%;
        background-height:25%;
        color:white;
    }
      #pr24{
        padding:2em 2em 2em 2em;
        font-size:20px;
        font-family: Optimus Princeps;
        background-image:url("https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/bulb.jpg?raw=true");
        background-width:25%;
        background-height:25%;
        color:black;
    }
      #pr2{
        padding:1em 1em 1em 1em;
        font-size:40px;
        
    }
      #pr1{
        padding:2em 2em 2em 2em;
        font-size:20px;
        font-family: Optimus Princeps;
        background-image:url("https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/book.jpg?raw=true");
        background-width:50%;
        background-height:50%;
        color:white;
    }
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
        float:right;
    height:50%;
    width:50%;
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
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
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
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: 1.5;
          font-size: 3rem;
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
          font-size: 2rem;
        }
        .card p {
          margin: 0;
          font-size: 2rem;
          line-height: 1.5;
        }
        .logo {
          height: 1.5em;
          float:left;
          margin-right:1em
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
   </>
    );
}


export default HomePage;
