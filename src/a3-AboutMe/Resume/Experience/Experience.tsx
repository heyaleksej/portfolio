import React from 'react';
import s from './Experience.module.scss'


const experience = [
	{
		id: '1',
		company: 'https://it-incubator.by/React-online.html',
		title:'IT-incubator, 2022',
		description: 'Front-end (React/Redux/Typescript)'
	},

	{
		id: '4',
		company: 'https://avito.ru/',
		title: 'Avito.ru',
		description: 'technical support specialist / client service with 2 years experience'
	},

	{
		id: '6',
		company: 'https://www.spbstu.ru/',
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
				<h3 className={s.expTitle}>Education & Experience</h3>
			</div>
			<ul className={s.expList}>
				{experienceList}
			</ul>
		</div>
	)
}
