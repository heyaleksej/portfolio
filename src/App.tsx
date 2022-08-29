import React from 'react';
import s from './App.module.scss';
import './App.module.scss';
import {Menu} from './RightBox/Menu';
import {RoutesNavigation} from './Routes/RoutesNavigation';
import {Avatar} from "./Avatar/Avatar";

function App() {
    return (
            <span className={s.wrapper}>
                 <Avatar/>
                 <div className={s.rightBox}>
                     <Menu/>
                     <RoutesNavigation/>
                 </div>
            </span>
    );
}

export default App;
