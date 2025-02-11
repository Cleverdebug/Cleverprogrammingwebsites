import JeenaHead from "@/src/layout/JeenaHead";
import Preloader from "@/src/layout/Preloader";
import "@/styles/globals.css";
import "@/styles/buttonStyle.css";
import "@/styles/layout.css";
import { Fragment, useEffect, useState } from "react";
// import '@/styles/index.css';
export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      <JeenaHead />
      {/* {loading && <Preloader />} */}
      <Component {...pageProps} />
    </Fragment>
  );
}
