import { SIntro } from "../../Profile/ProfileStyles"
import { CareerStyle, Exp } from "../ExpStyles"

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
									I worked with co-workers came from France, Belgium and Canada.
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
								<li>Example1</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
					<CareerStyle.Box>
						<CareerStyle.Title>
							Volunteer | Office of International Affairs, Hanyang University
						</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2016.11 ~ 2017.02</CareerStyle.Period>
						<CareerStyle.Desc>
							<ul>
								<li>외국인 교환학생들을 대상으로 통역 및 문화 전달 봉사</li>
								<li>외국인 학생들의 학교와 한국 문화 적응을 도왔다.</li>
								<li>우수 보고서 상 받음</li>
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

export default Activities
