import React from 'react'
import s from "./Error404.module.css";
import common from "../Styles/CommonStyles.module.scss";
import animation from "../../AboutMe/AboutMe.module.scss";
import app from "../../App.module.scss";
import lost from './../../assets/image/404nf.gif'
import {NavLink} from "react-router-dom";
import back from './../../assets/image/back_120113.svg'


export const Error404 = () => {

    return (
        <div className={`${common.infoBox} ${animation.animation} ${{backgroundColor: 'white'}}`}>
            <div className={common.infoWrapper}>
                <div className={`${s.box} ${app.container}`}>
                    <span className={s.title}>
                        <div className={s.nf}>404</div>
                        <span className={s.text}>Ops! Page not found</span>
                        <NavLink to={'/'} className={s.text}>
                            Go Back <img className={s.linkBack} src={back} alt={'go back img'}/>
                        </NavLink></span>
                    <img src={lost} alt={''}/>


                </div>
            </div>
        </div>
    )
};