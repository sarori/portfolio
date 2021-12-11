import { SIntro } from "../ProfileStyles"

const Intro = () => {
	return (
		<SIntro.Wrapper>
			<SIntro.Container>
				<SIntro.ContentWrapper>
					<SIntro.Img
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/myprofile.jpeg?alt=media&token=c308b9b1-6466-4066-95f9-0a7ea91b87d8"
						alt="myprofile"
					/>

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
								<a
									href="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/CV_Saro_Park.pdf?alt=media&token=a5fb0dc0-52bc-45d8-844e-1235e7ae8642"
									target="_blank"
									rel="noreferrer"
									download
								>
									<SIntro.Button>Download CV</SIntro.Button>
								</a>
							</SIntro.Intro>
						</SIntro.Desc>
					</SIntro.DetailWrapper>
				</SIntro.ContentWrapper>
			</SIntro.Container>
		</SIntro.Wrapper>
	)
}

export default Intro
