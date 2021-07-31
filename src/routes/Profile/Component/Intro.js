import { useHistory } from "react-router-dom"
import { SIntro } from "../ProfileStyles"

const Intro = () => {
	const history = useHistory()
	return (
		<SIntro.Wrapper>
			<SIntro.Container>
				<SIntro.ContentWrapper>
					<SIntro.Img src="/images/myprofile.jpeg" alt="myprofile" />
					<SIntro.DetailWrapper>
						<SIntro.Desc>Hello, This is Saro Park.</SIntro.Desc>
						<SIntro.Info onClick={() => history.push("/contact")}>Contact</SIntro.Info>
					</SIntro.DetailWrapper>
				</SIntro.ContentWrapper>
				<SIntro.Title>ABOUT ME.</SIntro.Title>
			</SIntro.Container>
		</SIntro.Wrapper>
	)
}

export default Intro
