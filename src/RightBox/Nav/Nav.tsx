import React from 'react';
import s from "../Menu.module.scss";
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <div className={s.linkBox}>
                <NavLink className={s.link} to={'/about'}>
                    <span className={s.white}>About </span>
                    <span className={s.accent}>Me</span>
                </NavLink>
                <NavLink className={s.link} to={'/projects'}>
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
    );
}

