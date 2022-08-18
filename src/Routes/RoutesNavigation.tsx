import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { AboutMe } from '../AboutMe/AboutMe';
import { Portfolio } from '../Portfolio/Portfolio';
import {Contacts} from "../Contacts/Contacts";
import {Skills} from "../AboutMe/Resume/Skills/Skills";


export const PATH = {
	ABOUT: '/about',
	PORTFOLIO: '/portfolio',
	CONTACTS: '/contacts',
	SKILLS: '/skills'
}


export const RoutesNavigation = () => {
	return (
		<div>
				<Routes>
					<Route path={PATH.ABOUT} element={<AboutMe/>}/>
					<Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
					<Route path={PATH.CONTACTS} element={<Contacts/>}/>
					<Route path={PATH.SKILLS} element={<Skills/>}/>
				</Routes>
		</div>
	);
}

