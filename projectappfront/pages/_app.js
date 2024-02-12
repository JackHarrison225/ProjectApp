
import { useEffect } from 'react';
import {useRouter} from 'next/router'
import { Inter } from "next/font/google";
import { ProjectProvider } from '../contexts/ProjectsContexts'
// import {ApiClientProvider} from '../contexts/ApiClientContext';
// import {ApiClient} from '@/utils/apiClient'
import '../app/globals.css'
import NavBarAuth from '../components/navcomponents/NavBarAuth'

// const apiClient = new ApiClient()

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {

  const router = useRouter()

  const noNavBarPaths = ['/login', '/signup']

  useEffect(() => {

    document.body.className = inter.className;
  }, [])

  return (
    // <ApiClientProvider client={apiClient}>
    <>
      <ProjectProvider>
        {!noNavBarPaths.includes(router.pathname) && <NavBarAuth />}
        
        <Component {...pageProps} />
      </ProjectProvider>

    </>



    // </ApiClientProvider>
  );
}

export default MyApp;