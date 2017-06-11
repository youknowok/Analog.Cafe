// tools
import React from "react"
import { Router, Route, browserHistory, IndexRoute } from "react-router"
import Helmet from "react-helmet"
import ReactGA from "react-ga"

// theme
import { TheZine } from "../../themes/TheZine"


// sections
import { Publication } from "./Publication"
import { Submit } from "./Submit"

// pages
import { NotFound } from "./Error"
import { Introduction } from "./Submit/Introduction"
import { Composer } from "./Submit/Composer"
import { About } from "./About"
import { ListPosts } from "./Publication/List"
import { Post } from "./Publication/Post"


// init GA tracking
ReactGA.initialize("UA-91374353-3")

// render & route
export const App = props => {
	const logPageView = () => {
		ReactGA.set({ page: window.location.pathname + window.location.search })
		ReactGA.pageview(window.location.pathname + window.location.search)
	}
	return (
		<TheZine>
			<Helmet
				defaultTitle="Analog.Cafe ☕️"
				titleTemplate="%s ☕️ Analog.Cafe"
			/>

			<Router history={ browserHistory } onUpdate={logPageView} >

				<Route path="/"			 					component={ Publication } >
					<IndexRoute 								component={ ListPosts } />
					<Route path="photo-essays"	component={ ListPosts } />
					<Route path="articles"			component={ ListPosts } />
					<Route path="about"			 		component={ About } />
					<Route path="zine/*"				component={ Post } />
				</Route>

				<Route path="submit"					component={ Submit } >
					<IndexRoute 								component={ Introduction } />
					<Route path="compose" 			component={ Composer } />
				</Route>

				<Route path="*"								component={ NotFound } status={404} />

			</Router>
		</TheZine>
	)
}