import React from 'react';
import Blub from './Blub';
import { range } from './helpers';

const BulbList = ({ nbrOfBeats, isPlaying, beat }) => {
  const renderedBulbs = range(0, nbrOfBeats - 1).map((value) => <Blub key={value} />);

  if (isPlaying) {
    renderedBulbs[beat] = React.cloneElement(renderedBulbs[beat] || renderedBulbs[0], { isActive: true });
  }

  return <div className="Bulb-list">{renderedBulbs}</div>;
};

export default React.memo(BulbList);
