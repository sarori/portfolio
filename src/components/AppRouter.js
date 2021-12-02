import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "../routes/Home/Home"
import Profile from "../routes/Profile/Profile"
import Projects from "../routes/Projects/Projects"
import Contact from "../routes/Contact/Contact"
import Header from "../routes/Header/Header"

const AppRouter = () => {
	return (
		<BrowserRouter basename={"/portfolio"}>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/profile/:param" component={Profile} />
				<Route path="/projects/:param" component={Projects} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</BrowserRouter>
	)
}

export default AppRouter
