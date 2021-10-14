import { CareerStyle, Exp } from "../ExpStyles"
import { SIntro } from "../ProfileStyles"

const Me = () => {
	return (
		<Exp.Wrapper>
			<Exp.Container>
				<SIntro.Title style={{ display: "flex", justifyContent: "center" }}>
					About Me.
				</SIntro.Title>
				<CareerStyle.Col>
					<CareerStyle.Box>
						<CareerStyle.Title>Skills</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>

						<CareerStyle.Desc>
							<ul>
								<li>Language: TypeScript, JavaScript, C,</li>
								<li>
									Front-End: React, React Hooks, Apollo, HTML, Styled-components
								</li>
								<li>Back-End: Apollo Server, GraphQL, Prisma, Postgres, NodeJS</li>
								<li>Git, Documentation</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
					<CareerStyle.Box>
						<CareerStyle.Title>Language</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Desc>
							<ul>
								<li>Korean : Native</li>
								<li>English : Fluent</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
					<CareerStyle.Box>
						<CareerStyle.Title>Education</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Desc>
							<ul>
								<li>2019 - Present | école 42, Paris, France</li>
								<li>
									2015 - 2019 | Hanyang University, Seoul, South Korea / Bachelor
									Degree - Major of Information System
								</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
				</CareerStyle.Col>
			</Exp.Container>
		</Exp.Wrapper>
	)
}

export default Me
