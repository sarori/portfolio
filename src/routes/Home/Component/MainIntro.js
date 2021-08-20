import { useHistory } from "react-router-dom"
import { FileScreen } from "../../SharedStyles"

const MainIntro = () => {
	const history = useHistory()
	return (
		<FileScreen.Wrapper>
			<FileScreen.Container style={{ width: "66.5%" }}>
				<FileScreen.Top>
					<FileScreen.RoundBtn onClick={() => history.push("/")}></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
				</FileScreen.Top>
				<FileScreen.HomeBody>
					<img src="/images/intro.png" alt="intro" />
				</FileScreen.HomeBody>
			</FileScreen.Container>
		</FileScreen.Wrapper>
	)
}

export default MainIntro
