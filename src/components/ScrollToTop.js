import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { stopScroll } from "../scrollHelper";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Stop scrolling
    stopScroll();
  }, [pathname]);

  return null;
};

export default ScrollToTop;
