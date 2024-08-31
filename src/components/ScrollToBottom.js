import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ScrollToContent = () => {
  const location = useLocation();
  const restaurants = useSelector((state) => state.restaurants.items);

  useEffect(() => {
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;

    // Check if restaurants have been loaded (especially for the Home component)
    if (restaurants.length > 0) {
      window.scrollTo({
        top: headerHeight,
        behavior: 'smooth', // Smooth scrolling
      });
    }
  }, [location, restaurants.length]);

  return null;
};

export default ScrollToContent;
