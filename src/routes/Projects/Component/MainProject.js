import { useHistory, useParams } from "react-router-dom"
import { FileScreen } from "../../SharedStyles"
import Insta from "./Insta"
import Sleact from "./Sleact"
import SMSW from "./SMSW"
import Board from "./Board"
import Twitter from "./Twitter"
import Others from "./Others"
import Ecole from "./Ecole"

const ProjectCases = (param) => {
	switch (param) {
		case "mainproject":
			return <Board />
		case "instaclone":
			return <Insta />
			break
		case "sleact":
			return <Sleact />
			break
		case "smsw":
			return <SMSW />
			break
		case "twitter":
			return <Twitter />
			break
		case "ecole":
			return <Ecole />
			break
		case "others":
			return <Others />
			break

		default:
			return <Board />
	}
}

const MainProject = () => {
	const { param } = useParams()
	const history = useHistory()
	return (
		<FileScreen.Wrapper>
			<FileScreen.Container>
				<FileScreen.Top>
					<FileScreen.RoundBtn onClick={() => history.push("/")}></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
				</FileScreen.Top>
				<FileScreen.Body>{param && ProjectCases(param)}</FileScreen.Body>
			</FileScreen.Container>
		</FileScreen.Wrapper>
	)
}

export default MainProject
