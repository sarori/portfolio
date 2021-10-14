import { useHistory, useParams } from "react-router-dom"
import { FileScreen } from "../../SharedStyles"
import Activities from "./Activities"
import Career from "./Career"
import Intro from "./Intro"
import Me from "./Me"

const ProfileCase = (param) => {
	switch (param) {
		case "intro":
			return <Intro />
			break
		case "me":
			return <Me />
			break
		case "career":
			return <Career />
			break
		case "activities":
			return <Activities />
			break
		default:
			return <Intro />
	}
}

const MainProfile = () => {
	const history = useHistory()
	const { param } = useParams()

	return (
		<FileScreen.Wrapper>
			<FileScreen.Container>
				<FileScreen.Top>
					<FileScreen.RoundBtn onClick={() => history.push("/")}></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
				</FileScreen.Top>
				<FileScreen.Body>{param && ProfileCase(param)}</FileScreen.Body>
			</FileScreen.Container>
		</FileScreen.Wrapper>
	)
}

export default MainProfile
