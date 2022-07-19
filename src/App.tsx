import React from 'react';
import s from './App.module.scss';
import './App.module.scss';
import { Menu } from './Menu';
import { RoutesLinks } from './Routes/RoutesLinks';

function App() {
  return (
      <span className={s.wrapper}>
        <div className={s.leftBox}>
          <div className={s.avatar}></div>
        </div>
        <div className={s.rightBox}>

          <Menu/>
          <RoutesLinks/>


        </div>
      </span>
  );
}

export default App;
