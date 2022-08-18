import React from 'react';
import s from './Experience.module.scss'
import title from './../../../Common/Title/Title.module.scss'



const experience = [
	{
		id: '1',
		company: 'https://it-incubator.by/React-online.html',
		title:'IT-incubator, 2022',
		description: 'Front-end (React/Redux/Typescript)'
	},

	{
		id: '2',
		company: 'https://avito.ru/',
		title: 'Avito.ru',
		description: 'technical support specialist / client service with 2 years experience'
	},

	{
		id: '3',
		company: 'https://www.spbstu.ru/university/',
		title: 'Peter the Great St.Petersburg Polytechnic University, Institute of Physics, Nanotechnology and Telecommunications, 2017',
		description: 'Bachelor degree in Integral electronic'
	},
]

export const Experience = () => {

	const experienceList = experience.map(exp => {
		return <li key={exp.id} className={s.expItem}>
			<a className={s.expLink}  href={exp.company}  target="_blank">{exp.title}</a>
			<p className={s.expHeading} >{exp.description}</p>
		</li>

	})
	return (
		<div className={s.expBox}>
			<div className={s.expBoxTitle}>
				<h2>
					<span className={title.aboutTitle_white}>{'Education '}</span>
					<span className={title.aboutTitle_yellow}>{'& Experience'}</span>
				</h2>
			</div>
			<ul className={s.expList}>
				{experienceList}
			</ul>
		</div>
	)
}
