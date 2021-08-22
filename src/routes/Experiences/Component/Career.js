import { SIntro } from "../../Profile/ProfileStyles"
import { CareerStyle, Exp } from "../ExpStyles"

const Career = () => {
	return (
		<Exp.Wrapper>
			<Exp.Container>
				<SIntro.Title style={{ display: "flex", justifyContent: "center" }}>
					Career.
				</SIntro.Title>
				<CareerStyle.Col>
					<CareerStyle.Box>
						<CareerStyle.Title>Freelancer | Decode</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2021.06 ~ now</CareerStyle.Period>

						<CareerStyle.Desc>
							<ul>
								<li>Example1</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
					<CareerStyle.Box>
						<CareerStyle.Title>Ecole 42 in Paris</CareerStyle.Title>

						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2019.03 ~ now</CareerStyle.Period>

						<CareerStyle.Desc>
							<ul>
								<li>Example1</li>
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
							<ul>
								<li>Embedded software optimization and Research Rcnn algorithm</li>
								<li>Supporting —team as an intern</li>
								<li>Candidate of —- contest - winner ( certificate)</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
					<CareerStyle.Box>
						<CareerStyle.Title>
							{" "}
							Hanyang University | Bachelor Degree Major of Information System
						</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>

						<CareerStyle.Period>2015.02 ~ 2019.02</CareerStyle.Period>

						<CareerStyle.Desc>
							<ul>
								<li>Example1</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
				</CareerStyle.Col>
			</Exp.Container>
		</Exp.Wrapper>
	)
}

export default Career
