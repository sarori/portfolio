import { GrAttachment } from "react-icons/gr"
import { FaAward } from "react-icons/fa"
import { GrBook } from "react-icons/gr"

import { CareerStyle, Exp } from "../ExpStyles"
import { SIntro } from "../ProfileStyles"

const Awards = () => {
	return (
		<Exp.Wrapper>
			<Exp.Container>
				<SIntro.Title style={{ display: "flex", justifyContent: "center" }}>
					Awards.
				</SIntro.Title>
				<CareerStyle.Col>
					<CareerStyle.Box>
						<CareerStyle.Title>
							KIYO (Korea International Youth Olympiad) 2017
						</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>
						<CareerStyle.Period>2017.08.13</CareerStyle.Period>

						<CareerStyle.Desc>
							<CareerStyle.Main>
								Proposal of IoT device that adjusts temperature according to user's
								body temperature{" "}
							</CareerStyle.Main>
							<ul>
								<li>Awarded the gold prize</li>
								<li>
									Certificate&nbsp;&nbsp;->{" "}
									<a
										href="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/olympiad.jpg?alt=media&token=990c5b74-d60d-4c55-ac35-57f35b9cddf3"
										target="_blank"
										rel="noreferrer"
										download
									>
										<FaAward size={22} />
									</a>
									&nbsp;(click to see details)
								</li>
								<li>
									References ->{" "}
									<a
										href="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/kiyo_heatpoint.jpeg?alt=media&token=7a8bc022-172b-44e1-9896-2bc4d03fc65d"
										target="_blank"
										rel="noreferrer"
										download
									>
										<GrBook size={22} />
									</a>
								</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>

					<CareerStyle.Box>
						<CareerStyle.Title>
							Korea Financial Security Institute 2018
						</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>

						<CareerStyle.Period>2018.10.24</CareerStyle.Period>

						<CareerStyle.Desc>
							<CareerStyle.Main>
								Appropriate pet insurance premium calculation method through pet
								health care big data analysis.
							</CareerStyle.Main>
							<ul>
								<li>Awarded the Encouragement prize</li>

								<li>
									Certificate&nbsp;&nbsp;->{" "}
									<a
										href="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/bigdata.jpg?alt=media&token=7fa23e66-9364-4653-b427-cf344f8fe7b9"
										target="_blank"
										rel="noreferrer"
										download
									>
										<FaAward size={22} />
									</a>
								</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>

					<CareerStyle.Box>
						<CareerStyle.Title>
							Embedded software optimization contest
						</CareerStyle.Title>
						<CareerStyle.BoxRow></CareerStyle.BoxRow>

						<CareerStyle.Period>2017.02.25</CareerStyle.Period>

						<CareerStyle.Desc>
							<CareerStyle.Main>
								Optimize the embedded object detection system based on Faster RCNN
								as a real-time object recognition algorithm.
							</CareerStyle.Main>
							<ul>
								<li>Awarded 2nd prize</li>
								<li>
									<li>
										Certificate&nbsp;&nbsp;->{" "}
										<a
											href="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/embedded.jpeg?alt=media&token=f8bb112e-79d1-4c9b-a1e6-9963ca430527"
											target="_blank"
											rel="noreferrer"
											download
										>
											<FaAward size={22} />
										</a>
									</li>
								</li>
							</ul>
						</CareerStyle.Desc>
					</CareerStyle.Box>
				</CareerStyle.Col>
			</Exp.Container>
		</Exp.Wrapper>
	)
}

export default Awards
