import React from 'react';
import s from './Experience.module.scss'
import title from './../../../Common/Title/Title.module.scss'



const experience = [
	{title:'IT-incubator, 2022', description: 'Front-end (React/Redux/Typescript)'},
	{title: 'Avito.ru', description: 'technical support specialist. Client services.  2 years experience. march`19-jan`22'},
	{title: 'Peter the Great St.Petersburg Polytechnic University, Institute of Physics, Nanotechnology and Telecommunications, finish 2017',
		description: 'Bachelor degree in Integral electronic'
	},
]

export const Experience = () => {

	const experienceList = experience.map((exp, index) => {
		return <li key={index} className={s.expItem}>
			<a className={s.expTitleCompany}>{exp.title}</a>
			<p className={s.expHeading} >{exp.description}</p>
		</li>

	})
	return (
		<div className={s.expBox}>
			<div className={s.expBoxTitle}>
				<h2>
					<span className={title.titleBlack}>{'Education '}</span>
					<span className={title.titleRed}>{'& Experience'}</span>
				</h2>
			</div>
			<ul className={s.expList}>
				{experienceList}
			</ul>
		</div>
	)
}
