import React, { useEffect } from 'react';

import { boop } from './sounds';

const Bulb = ({ isActive }) => {
  const beep = () => {
    boop.play();
  };

  useEffect(() => {
    if (isActive) {
      beep();
    }
  }, [isActive]);

  return <div className={`Bulb ${isActive && 'Bulb-active'}`} />;
};

export default React.memo(Bulb);
