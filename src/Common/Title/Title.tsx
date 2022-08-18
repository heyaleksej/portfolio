import React, {FC} from 'react';
import s from './Title.module.scss'
import {NavLink} from "react-router-dom";
import xxx from "./../../assets/image/xxx.png";


type TitleProps = {
	title: string
	accentTitle?: string
}


export const Title: FC<TitleProps> = ({title, accentTitle}) => {
	return (
		<span className={s.titleWithBtn}>
			<h2>
				<span className={s.aboutTitle_white}>{title}</span>
				<span className={s.aboutTitle_yellow}>{accentTitle}</span>
			</h2>
			<NavLink to={'/'}>
				<img className={s.linkBack} src={xxx}/>
			</NavLink>
		</span>
	)
}