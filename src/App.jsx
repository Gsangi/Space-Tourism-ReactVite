import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

function App() {
  const [device, setDevice] = useState("mobile")
  const [url, setUrl] = useState("/")
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const location = useLocation();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize < 629) {
      setDevice("mobile")
    } else if (windowSize < 1165) {
      setDevice("tablet")
    } else {
      setDevice("desktop")
    }
  }, [windowSize]);

  useEffect(() => {
    if (location.pathname === '/') {
      setUrl("home")
    } else if (location.pathname === '/destination') {
      setUrl("destination")
    } else if (location.pathname === '/crew') {
      setUrl("crew")
    } else {
      setUrl("technology")
    }
  }, [location.pathname]);


  useEffect(() => {
    document.body.style.background = `url(/images/${url}/background-${url}-${device}.jpg) no-repeat center / cover`
  }, [device, url])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout windowSize={windowSize} location={location} />}>
          {/* <Route index element={<Home />}/> */}
          {/* <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology /> } /> */}
        </Route>
      </Routes >     
    </div>
  );
}

export default App;
