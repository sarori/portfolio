import { SIntro } from "../ProfileStyles"
import { CareerStyle, Exp } from "../../Profile/ExpStyles"

const Activities = () => {
	return (
		<Exp.Wrapper>
			<Exp.Container>
				<SIntro.Title style={{ display: "flex", justifyContent: "center" }}>
					Activities.
				</SIntro.Title>
				<CareerStyle.Col>
					<CareerStyle.Box>
						<CareerStyle.Title>Part time | steakoverflow, Ecole42</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2020.07 ~ 2021.02</CareerStyle.Period>
						<CareerStyle.Desc>
							<ul>
								<li>
									Steakoverflow is a student food truck located in Ecole 42 Paris,
									managed by 42 students union.
								</li>
								<li>
									Worked with co-workers who have various backgrounds and
									communicate with them
								</li>
								<li>
									I learned cooperation and problem-solving skills by handling
									problems.
								</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
					<CareerStyle.Box>
						<CareerStyle.Title>Exchange Students | Finland</CareerStyle.Title>

						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2017.08 ~ 2018.05</CareerStyle.Period>

						<CareerStyle.Desc>
							<ul>
								<li>
									I experienced cultural exchange with students from various
									backgrounds.
								</li>
								<li>
									Through team project activities and online projects, I gained
									collaboration and communication skills.{" "}
								</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
					<CareerStyle.Box>
						<CareerStyle.Title>Research experience abroad</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2016.07</CareerStyle.Period>
						<CareerStyle.Desc>
							<ul>
								<li>Water Purification Method by Using Banana Peel</li>
								<li>Worked as main researcher of the team</li>
								<li>Funded 10,000 USD from Woori Bank ltd co.,</li>
								<li>
									Contacted relevant institutions in North America, involved
									professors and visited them for two weeks getting advice and
									guidance.
								</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
					<CareerStyle.Box>
						<CareerStyle.Title>
							Volunteer | Office of International Affairs, Hanyang University
						</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2017.03 ~ 2017.06</CareerStyle.Period>
						<CareerStyle.Desc>
							<ul>
								<li>
									Worked as an interpretation and cultural delivery service for
									foreign exchange students
								</li>
								<li>
									Helped foreign exchange students for adapting them more easily
									to the school and their Korean life.
								</li>
								<li>Awarded the Excellent prize (Report)</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
				</CareerStyle.Col>
			</Exp.Container>
		</Exp.Wrapper>
	)
}

export default Activities
