import React from 'react';
import {Intro} from './Intro/Intro';
import {NavLink} from 'react-router-dom';
import s from './Menu.module.scss';

export const Menu = () => {
    return (
        <>
            <Intro/>
            <div className={s.linkBox}>
                <NavLink className={s.link} to={'/about'}>
                    <span className={s.white}>About </span>
                    <span className={s.accent}>Me</span>
                </NavLink>
                <NavLink className={s.link} to={'/portfolio'}>
                    <span className={s.white}>My</span>
                    <span className={s.accent}>Portfolio</span>
                </NavLink>
                <NavLink className={s.link} to={'/contacts'}>
                    <span className={s.white}>Get</span>
                    <span className={s.accent}>In Touch</span>
                </NavLink>
                <NavLink className={s.link}  to={'/skills'}>
                    <span className={s.white}>Technical</span>
                    <span className={s.accent}>Skills</span>
                </NavLink>
            </div>
        </>
    )
}