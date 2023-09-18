//1.  Import Area
import Head from "next/head";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Section from "./components/Section";
import Footer from "./components/Footer";
// Import somthing from 'some' library/location
//import styles from '../styles/Home.module.css'

//2. Functoin Definition Area
function Home() {
  return (
    <>
      <Head>
        <title>Welcome to the first Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header />
        <main>
          <Aside />
          <Section />
        </main>
        <Footer />
      </div>
    </>
  );
}

// 3. Export Area

export default Home;
