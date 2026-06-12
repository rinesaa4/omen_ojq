import {Routes, Route, useLocation} from 'react-router-dom';
import Lenis from 'lenis';
import { useEffect, lazy, Suspense } from 'react';
const Main = lazy(() => import('./Pages/Main_Page/Main.js'));
const P_F_Articles = lazy(() => import('./Pages/Planifikimi_Page/P_F_Articles.js'));
const Shtatzenia_articles = lazy(() => import('./Pages/Shtatzenia/Shtatzenia_articles.js'));
const Lindja_articles = lazy(() => import('./Pages/Lindja/Lindja_articles.js'));
const Foshnja_articles = lazy(() => import('./Pages/Foshnja/Foshnja_articles.js'));
const Lindja_me_prerja_cezariane_TEXT = lazy(() =>
  import('./Pages/Lindja/Lindja_me_prerja_cezariane_TEXT.js')
);
const Ushqyerja_gjatë_shtatzënisë_TEXT = lazy(() =>
  import('./Pages/Shtatzenia/Ushqyerja_gjatë_shtatzënisë_TEXT.js')
);
const Ushqyerja_me_gji_dhe_përfitimet_e_saj_TEXT = lazy(() =>
  import('./Pages/Foshnja/Ushqyerja_me_gji_dhe_përfitimet_e_saj_TEXT.js')
);
const Contact = lazy(() => import('./components/contact/Contact.js'));
const About_us = lazy(() => import('./components/about_us/About_us.js'));


function ScrollToTop() {
    const { pathname } = useLocation();

   useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Loader() {
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#EF5A76",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      zIndex: 9999,
      fontSize:'30px', fontFamily:'Abhaya Libre', letterSpacing: '15%'
    }}>
      Loading...
    </div>
  );
}

function App() {
  
  useEffect(() => {
  const lenis = new Lenis();

  let rafId;

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}, []);
  return (
    <>
     <ScrollToTop/>
     <Suspense fallback={<Loader/>}>
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about_us" element={<About_us/>}/>
      <Route path="/planifikimi_familjar" element={<P_F_Articles/>}/>
      <Route path="/shtatzenia" element={<Shtatzenia_articles />}/>
       <Route path="/ushqyerja_gjatë_shtatzënisë" element={<Ushqyerja_gjatë_shtatzënisë_TEXT/>} />
      <Route path="/lindja" element={<Lindja_articles />}/>
       <Route path='/lindja_me_prerja_cezariane' element={<Lindja_me_prerja_cezariane_TEXT/>}/>
      <Route path="/foshnja" element={<Foshnja_articles />}/>
       <Route path="/ushqyerja_me_gji_dhe_përfitimet_e_saj" element={<Ushqyerja_me_gji_dhe_përfitimet_e_saj_TEXT />} />
     </Routes>
     </Suspense>
    </>
  );
}



export default App;
