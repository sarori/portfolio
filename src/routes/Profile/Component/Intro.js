import { useHistory } from "react-router-dom"
import { Folder } from "../../SharedStyles"
import { SIntro } from "../ProfileStyles"

const Intro = () => {
	const history = useHistory()
	return (
		<SIntro.Wrapper>
			<SIntro.Container>
				<SIntro.ContentWrapper>
					<SIntro.Img src="/images/myprofile.jpeg" alt="myprofile" />
					<SIntro.DetailWrapper>
						<SIntro.Desc>
							<SIntro.Title>Hello, I'm Saro Park </SIntro.Title>
							<SIntro.Intro>
								<div>
									&nbsp;&nbsp;&nbsp;&nbsp;I am currently studying web development
									in école 42 in Paris and working a freelance Front-End Developer
									with experience creating successful websites. I've done many
									projects in C, Javascript and TypeScript. I'm good at
									problem-solving and self-development. I am also a good team
									player with good communicating and collaborating skills. I
									communicate with code and turn ideas into reality.{" "}
								</div>
								<SIntro.Button>Download CV</SIntro.Button>
							</SIntro.Intro>
						</SIntro.Desc>
					</SIntro.DetailWrapper>
				</SIntro.ContentWrapper>
			</SIntro.Container>
		</SIntro.Wrapper>
	)
}

export default Intro
