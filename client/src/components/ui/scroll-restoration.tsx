import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * ScrollRestoration component ensures that pages load at the top when navigating
 * unless there's a hash link in the URL
 */
export const ScrollRestoration = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Don't scroll to top if there's a hash in the URL
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      // If there's a hash, try to scroll to that element
      try {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (e) {
        console.error("Error scrolling to element:", e);
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  return null;
};

export default ScrollRestoration;