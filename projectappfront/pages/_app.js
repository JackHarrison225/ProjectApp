import { useEffect} from "react";

import { Inter } from "next/font/google";
import { ProjectProvider } from '../contexts/ProjectsContexts'

import '../app/globals.css'

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    document.body.className = inter.className;
  }, [])

  return (
    <>
          <ProjectProvider>
            <Component {...pageProps} />
          </ProjectProvider>
    </>
  );
}

export default MyApp;

 