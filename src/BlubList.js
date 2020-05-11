import React from 'react';
import styled from 'styled-components';

import Blub from './Blub';
import { range } from './helpers';

const StyledBulbList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BulbList = ({ nbrOfBeats, isPlaying, beat }) => {
  const renderedBulbs = range(0, nbrOfBeats - 1).map((value) => <Blub key={value} />);

  if (isPlaying) {
    renderedBulbs[beat] = React.cloneElement(renderedBulbs[beat] || renderedBulbs[0], { isActive: true });
  }

  return <StyledBulbList>{renderedBulbs}</StyledBulbList>;
};

export default React.memo(BulbList);
