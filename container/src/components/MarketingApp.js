import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        // The Container noticed navigation in MF-Marketing
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    // Whenever some navigation occurs on Container history object is going to call provided function (MF-Marketing function)
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
