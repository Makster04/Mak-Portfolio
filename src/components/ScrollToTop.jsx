import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(`Navigated to ${pathname}`); // Add this line for debugging
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
