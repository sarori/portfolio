import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../routes/Home/Home"
import Profile from "../routes/Profile/Profile"
import Projects from "../routes/Projects/Projects"
import Contact from "../routes/Contact/Contact"
import Experiences from "../routes/Experiences/Experiences"
import Header from "../routes/Header/Header"

const AppRouter = () => {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/projects/:param" component={Projects} />
				<Route path="/profile/:param" component={Profile} />
				<Route path="/experiences/:param" component={Experiences} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</Router>
	)
}

export default AppRouter
