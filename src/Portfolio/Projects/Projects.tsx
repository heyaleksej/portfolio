import React, {CSSProperties, FC} from 'react';
import s from './Projects.module.scss';
import social from './projectCover/social.jpg'
import {v1} from "uuid";
import cardsImg from './projectCover/cards.png'

type ProjectType = {
	title?: string
	content?: string
	style?: CSSProperties | undefined
}
const project = [
	{id: v1(), heading: 'Todolist', demo: '', github: '', image: social},
	{id: v1(), heading: 'Social NetWork', demo: 'https://heyaleksej.github.io/socialnetwork', github: 'https://github.com/heyaleksej/socialnetwork', image: social},
	{id: v1(), heading: 'Counter', demo: '', github: '', image: social},
	{id: v1(), heading: 'Cards App', demo: 'https://heyaleksej.github.io/cards-project', github: 'https://github.com/heyaleksej/cards-project', image: cardsImg},
]


export const Projects: FC<ProjectType> = ({title, content, style}) => {


	const projects = project.map(project => {
		return <div className={s.tiles} key={project.id}>
				<div className={s.tile} >
					<img src={project.image} className={s.projectImage}/>
					<div className={s.details}>
						<span className={s.title}>{project.heading}</span>
						<span className={s.info}>
							<a href={project.demo} className={s.link} target="_blank">Demo</a>
						</span>
						<span className={s.info}>
							<a href={project.github} className={s.link} target="_blank">Github</a></span>
					</div>
				</div>
		</div>
	})


	return (
		<div className={s.projectBox}>
			{projects}
		</div>
	)
}
