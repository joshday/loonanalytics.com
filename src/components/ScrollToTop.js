import { useEffect } from 'react'
import { withRouter } from 'react-router'

// This component is a hack so that scroll position moves to the top when you click a link
const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

export default withRouter(ScrollToTop);