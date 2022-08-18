import React from 'react';

import st from './Portfolio.module.scss'
import s from './Projects/Projects.module.scss';
import anim from './../AboutMe/AboutMe.module.scss'
import social from './Projects/projectCover/social.jpg'
import {v1} from "uuid";
import cardsImg from './Projects/projectCover/cards.png'
import {Title} from "../Common/Title/Title";

import common from './../Common/Styles/CommonStyles.module.scss'
import app from "../App.module.scss";

const projects = [
    {
        id: v1(),
        heading: 'Todolist',
        demo: '',
        github: '',
        image: social
    },
    {
        id: v1(),
        heading: 'Social NetWork',
        demo: 'https://heyaleksej.github.io/socialnetwork',
        github: 'https://github.com/heyaleksej/socialnetwork',
        image: social
    },
    {
        id: v1(),
        heading: 'Counter',
        demo: '',
        github: '',
        image: social
    },
    {
        id: v1(),
        heading: 'Cards App',
        demo: 'https://heyaleksej.github.io/cards-project',
        github: 'https://github.com/heyaleksej/cards-project',
        image: cardsImg
    },
]


const project = projects.map(p => <div className={s.tiles} key={p.id}>
        <div className={s.tile}>
            <img src={p.image} className={s.projectImage}/>
            <div className={s.details}>
                <span className={s.title}>{p.heading}</span>
                <span className={s.info}>
                    <a href={p.demo} className={s.link} target="_blank">Demo</a>
                </span>
                <span className={s.info}>
                    <a href={p.github} className={s.link} target="_blank">Github</a>
                </span>
            </div>
        </div>
    </div>
)


export const Portfolio = () => {
    return (
        <div className={`${common.infoBox} ${anim.animation}`}>
            <div className={common.infoWrapper}>
                <div className={`${common.infoInner} ${app.container}`}>
                    <Title title={'projects'}/>
                <div className={st.wrapper}>
                    <div className={st.item1}>{project[0]}</div>
                    <div className={st.item2}>{project[1]}</div>
                    <div className={st.item3}>{project[2]}</div>
                    <div className={st.item4}>{project[3]}</div>
                </div>

                </div>
            </div>
        </div>
)
    ;
}
