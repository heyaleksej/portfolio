import React from 'react';
import s from './AboutMe.module.scss'
import app from './../App.module.scss'
import {PersonalInfo} from './PersonalInfo/PersonalInfo';
import {Title} from "../Common/Title/Title";
import {Experience} from "./Resume/Experience/Experience";


export const AboutMe = () => {
    return (
        <div className={`${s.aboutBox} ${s.animation}`}>
            <div className={s.aboutWrapper}>
                <div className={`${s.aboutInner} ${app.container}`}>
                    <Title title='about' accentTitle='me'/>
                    <PersonalInfo/>
                    <Experience/>
                </div>
            </div>
        </div>
    );
}

