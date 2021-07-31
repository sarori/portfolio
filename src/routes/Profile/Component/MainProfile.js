import { useHistory, useParams } from "react-router-dom"
import { FileScreen } from "../../SharedStyles"
import Intro from "./Intro"
import Lan from "./Lan"

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
				<FileScreen.Body>{param === "intro" ? <Intro /> : <Lan />}</FileScreen.Body>
			</FileScreen.Container>
		</FileScreen.Wrapper>
	)
}

export default MainProfile
