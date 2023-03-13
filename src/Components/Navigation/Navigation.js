import React, { useEffect, useState } from 'react';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';

function Navigation(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowSize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, [windowWidth])
  return (
    <>
     {windowWidth > 640 
    ? <DesktopNavigation {...props} /> 
    : <MobileNavigation {...props} />}
    </>
  );
}
export default Navigation;