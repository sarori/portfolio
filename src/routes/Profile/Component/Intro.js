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
							<SIntro.Title>Hello👋</SIntro.Title>
							<SIntro.Title>I'm Saro Park,</SIntro.Title>
							<SIntro.Title>Student and Front-End Developer.</SIntro.Title>
							<SIntro.Title>Nice to meet you.</SIntro.Title>
						</SIntro.Desc>
					</SIntro.DetailWrapper>
				</SIntro.ContentWrapper>
				<SIntro.Title style={{ transform: "rotate(90deg)", margin: "2% 0" }}>
					&#x226B;
				</SIntro.Title>
				<SIntro.IntroWrapper>
					<SIntro.Title>ABOUT ME.</SIntro.Title>
					<SIntro.Intro>
						&nbsp;&nbsp;&nbsp;&nbsp;I am currently studying web development in école 42
						in Paris and working a freelance Front-End Developer with experience
						creating successful websites. I've done many projects in C, Javascript and
						TypeScript. I'm good at problem-solving and self-development. I am also a
						good team player with good communicating and collaborating skills. I
						communicate with code and turn ideas into reality.
					</SIntro.Intro>
					<SIntro.Intro>
						If you want to see my previous work history ->{" "}
						<SIntro.Info onClick={() => history.push("/projects")}>
							Click here.
						</SIntro.Info>
					</SIntro.Intro>
				</SIntro.IntroWrapper>
			</SIntro.Container>
		</SIntro.Wrapper>
	)
}

export default Intro
