import { useEffect} from "react";

import { useEffect } from 'react';
import {useRouter} from 'next/router'
import { Inter } from "next/font/google";
import { ProjectProvider } from '../contexts/ProjectsContexts'
import Head from 'next/head';
// import {ApiClientProvider} from '../contexts/ApiClientContext';
// import {ApiClient} from '@/utils/apiClient'

import '../app/globals.css'

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const noNavBarPaths = ['/login', '/signup']

  useEffect(() => {

    document.body.className = inter.className;
  }, [])

  return (
    <>
      <ProjectProvider>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/devicon/icons/devicon/devicon.min.css" />
      </Head>
        {!noNavBarPaths.includes(router.pathname) && <NavBarAuth />}
        
        <Component {...pageProps} />
      </ProjectProvider>

          <ProjectProvider>
            <Component {...pageProps} />
          </ProjectProvider>
    </>
  );
}

export default MyApp;

 