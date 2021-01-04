import React from 'react';
import CustomHook from '../../demos/customHook';
import Local from '../../demos/local';
import Test from '../../hooks/Fetch/Data/test';

const Landing = () => (
  <div>
    <div>Landing</div>
    <CustomHook />
    <Local />
    <Test />
  </div>
);

export default Landing;
