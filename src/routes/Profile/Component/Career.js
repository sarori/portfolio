import { SIntro } from "../../Profile/ProfileStyles"
import { CareerStyle, Exp } from "../ExpStyles"
import { GrAttachment } from "react-icons/gr"

const Career = () => {
	return (
		<Exp.Wrapper>
			<Exp.Container>
				<SIntro.Title style={{ display: "flex", justifyContent: "center" }}>
					Career.
				</SIntro.Title>
				<CareerStyle.Col>
					<CareerStyle.Box>
						<CareerStyle.Title>Freelance | Decode</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2021.06 ~ now</CareerStyle.Period>

						<CareerStyle.Desc>
							<CareerStyle.Main>
								Sunmoon University - Software Institute Website Taken a role as a
								front-end developer, implemented webpage. SPA react website.{" "}
								<a
									href="https://sw.sunmoon.ac.kr/"
									target="_blank"
									rel="noreferrer"
								>
									<GrAttachment size={16} />
								</a>
							</CareerStyle.Main>
							<ul>
								<li>
									Front-end : React.js / Typescript / Apollo / Styled-components
								</li>
								<li>Back-end : Node.js / GraphQL</li>
								<li>Database: PostgreSQL</li>
								<li>User SignUp / LogIn / Profile - Email user verification</li>
								<li>CMS</li>
								<li>Realtime Facility Reservation System</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>

					<CareerStyle.Box>
						<CareerStyle.Title>
							Intern | Security & Privacy Lab, Hanyang University
						</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>

						<CareerStyle.Period>2016.11 ~ 2017.02</CareerStyle.Period>

						<CareerStyle.Desc>
							<CareerStyle.Main>
								Security and Privacy LAB located in Seoul, South Korea(Hanyang
								University) Embedded software optimization
							</CareerStyle.Main>
							<ul>
								<li>Supported — team as an intern</li>
								<li>Researched Faster RCNN</li>
								<li>
									Participated Embedded software optimization contest <br />-
									Awarded 2nd prize
								</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
				</CareerStyle.Col>
			</Exp.Container>
		</Exp.Wrapper>
	)
}

export default Career
