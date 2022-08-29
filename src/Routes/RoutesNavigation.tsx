import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {AboutMe} from '../AboutMe/AboutMe';
import {Portfolio} from '../Portfolio/Portfolio';
import {Contacts} from "../Contacts/Contacts";
import {Skills} from "../AboutMe/Resume/Skills/Skills";
import { Error404 } from '../Common/404/Error404';
import {AppBar} from "@mui/material";


export const PATH = {
	MAIN:'/portfolio',
	ABOUT: '/about',
	PORTFOLIO: '/projects',
	CONTACTS: '/contacts',
	SKILLS: '/skills',
	PAGE404: '/page404',

}


export const RoutesNavigation = () => {
	return (
				<Routes>
					<Route path={'/'} element={<Navigate to={PATH.MAIN}/>}/>
					<Route path={PATH.MAIN} element={<AppBar/>}/>
					<Route path={PATH.ABOUT} element={<AboutMe/>}/>
					<Route path={PATH.PORTFOLIO} element={<Portfolio/>}/>
					<Route path={PATH.CONTACTS} element={<Contacts/>}/>
					<Route path={PATH.SKILLS} element={<Skills/>}/>
					<Route path={PATH.PAGE404} element={<Error404/>}/>
					<Route path={"/*"} element={<Error404/>}/>
				</Routes>
	);
}

