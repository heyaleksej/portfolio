import React from 'react';
import s from './Skills.module.scss'
import css from './image/css.svg'
import git from './image/github.svg'
import html from './image/html.svg'
import jest from './image/jest.svg'
import js from './image/js.svg'
import react from './image/react.svg'
import redux from './image/redux.svg'
import restA from './image/rest-api.svg'
import type from './image/typescriptlang-icon.svg'
import story from './image/storybook.svg'
import nodejs from './image/nodejs-svgrepo-com.svg'
import angular from './image/angular-svgrepo-com.svg'
import {Title} from '../Common/Title/Title';
import common from '../assets/sass/CommonStyles.module.scss'
import app from "../App.module.scss";

type SkillsType = {
    id: string
    skill: string
    icon: any
}

const skills: Array<SkillsType> = [
    {id: '1', skill: 'React', icon: react},
    {id: '2', skill: 'Redux', icon: redux},
    {id: '3', skill: 'REST API', icon: restA},
    {id: '4', skill: 'TDD - Jest', icon: jest},
    {id: '5', skill: 'HTML5', icon: html},
    {id: '6', skill: 'CSS & preprocessing', icon: css},
    {id: '7', skill: 'Storybook', icon: story},
    {id: '8', skill: 'Github', icon: git},
    {id: '9', skill: 'TypeScript', icon: type},
    {id: '10', skill: 'JavaScript', icon: js},
    {id: '11', skill: 'NodeJS', icon: nodejs},
    {id: '12', skill: 'Angular', icon: angular},
]

export const Skills = () => {

    const skillsList = skills.map(skill => {
        return <li key={skill.id} className={s.skillItem}>
            <img src={skill.icon} className={s.aboutIcon}/>
            <p className={s.skillTitle}>{skill.skill}</p>
        </li>
    })

    return (
        <div className={`${common.infoBox} ${s.animation}`}>
            <div className={common.infoWrapper}>
                <div className={`${common.infoInner} ${app.container}`}>
                    <Title title={'Skills'}/>
                    <ul className={s.skillList}>
                        {skillsList}
                    </ul>
                </div>
            </div>
        </div>
    )
}


