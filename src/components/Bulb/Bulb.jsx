import React, {useEffect} from 'react';

import * as styles from './styles';
import boop from '../../sounds';

const Bulb = ({isActive}) => {
  const beep = () => {
    boop.play();
  };

  useEffect(() => {
    if (isActive) {
      beep();
    }
  }, [isActive]);

  return <styles.Bulb isActive={isActive} />;
};

export default React.memo(Bulb);
