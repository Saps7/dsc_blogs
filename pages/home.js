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
        <ScrollableTabsButtonAuto/>

          
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
