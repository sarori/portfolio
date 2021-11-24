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
					<img
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/intro.png?alt=media&token=79af7b81-c3bb-4765-bcb8-4f7dc82522aa"
						alt="intro"
					/>
				</FileScreen.HomeBody>
			</FileScreen.Container>
		</FileScreen.Wrapper>
	)
}

export default MainIntro
