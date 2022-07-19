import React from 'react';
import s from './Skills.module.scss'
import css from './image/css.svg'
import git from './image/git.svg'
import html from './image/html.svg'
import jest from './image/jest.svg'
import js from './image/js.svg'
import react from './image/react.svg'
import redux from './image/redux.svg'
import restA from './image/rest-api.svg'
import type from './image/typescriptlang-icon.svg'
import story from './image/storybook.svg'
import app from "../../../App.module.scss";
import close from "../../../assets/image/close-button.png";
import {NavLink} from "react-router-dom";

type SkillsType = {
	id: string
	skill: string
	icon: any
}

const skills: Array<SkillsType> = [
	{id: '2456666', skill: 'React', icon: react},
	{id: '74888', skill: 'Redux', icon: redux},
	{id: '777', skill: 'TypeScript', icon: type},
	{id: '643', skill: 'JavaScript', icon: js},
	{id: '1249', skill: 'REST API', icon: restA},
	{id: '68543', skill: 'HTML5', icon: html},
	{id: '345345', skill: 'CSS & preprocessing', icon: css},
	{id: '5436457', skill: 'TDD - Jest', icon: jest},
	{id: '1254', skill: 'Storybook', icon: story},
	{id: '124', skill: 'Github', icon: git},
]

export const Skills = () => {

	const skillsList = skills.map(skill => {
		return <li key={skill.id} className={s.skillItem}>
				{/*<span className={s.aboutIcon}>*/}
					<img src={skill.icon} className={s.aboutIcon}/>
					{/*<FontAwesomeIcon icon={skill.icon}/>*/}
					{/*</span>*/}
				<p className={s.skillTitle}>{skill.skill}</p>
			</li>
	})

	return (
		<div className={`${s.skillBox} ${s.animation}`}>
			<div className={s.skillHeadingBox}>
				<h3 className={s.skillHeading}>Skills</h3>
			</div>
			<ul className={s.skillList}>
				{skillsList}
			</ul>
			<NavLink to={'/'}  className={app.linkBack}>
				<img className={app.aboutBtnClose} src={close}/>
			</NavLink>

		</div>
	)
}
