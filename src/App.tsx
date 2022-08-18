import React from 'react';
import s from './App.module.scss';
import './App.module.scss';
import { Menu } from './Menu';
import { RoutesNavigation } from './Routes/RoutesNavigation';

function App() {
  return (
      <span className={s.wrapper}>
        <div className={s.leftBox}>
          <div className={s.avatar}></div>
        </div>
        <div className={s.rightBox}>

          <Menu/>
          <RoutesNavigation/>


        </div>
      </span>
  );
}

export default App;
