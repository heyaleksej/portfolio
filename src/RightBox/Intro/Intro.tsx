import React from 'react';
import s from './Intro.module.scss'
import {TypingEffect} from "./TypingEffect";
import Footer from "../../Footer/Footer";

export const Intro = () => {
    return (
        <>
            <div className={s.box}>
                 <span className={s.textIntro}>Hi There! I'm</span>
                    <span className={s.textIntroName}>Alexey Rogozhnikov</span>
                    <span className={s.textIntroJob}>Front-end developer</span>
                    <span className={s.typing}><TypingEffect/></span>
            </div>
            <Footer/>
        </>
    );
}

