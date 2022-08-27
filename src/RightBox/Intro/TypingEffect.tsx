import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import s from './Intro.module.scss';

export const TypingEffect = () => {

    return (
        <ReactTypingEffect
            className={s.textIntro}
            speed={80}
            eraseSpeed={30}
            eraseDelay={3000}
            text={["Open to work "]}
            cursor=''
        />
    );
}