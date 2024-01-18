import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
    });
  }, []);
  
  return (
    <Provider store={store}>
      <Nav/>
        <Component {...pageProps} />
        <div className="bg-[#242424] w-full">
      <Footer/>
        </div>
    </Provider>
  );
}
