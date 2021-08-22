import { useHistory, useParams } from "react-router-dom"
import { FileScreen } from "../../SharedStyles"
import Awards from "./Awards"
import Career from "./Career"

import Activities from "./Activities"

const ExpCase = (param) => {
	switch (param) {
		case "career":
			return <Career />
			break
		case "activities":
			return <Activities />
			break
		default:
			return <Awards />
	}
}

const MainExp = () => {
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
				<FileScreen.Body>{param && ExpCase(param)}</FileScreen.Body>
			</FileScreen.Container>
		</FileScreen.Wrapper>
	)
}

export default MainExp
