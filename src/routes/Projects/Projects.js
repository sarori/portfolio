import Footer from "../Home/Component/Footer"
import {
	Container,
	FooterWrapper,
	LeftContainer,
	RightContainer,
	Wrapper,
} from "../Home/HomeStyles"
import MainProject from "./Component/MainProject"
import ProjectFolder from "./Component/ProjectFolder"

const Projects = () => {
	return (
		<Wrapper>
			<Container>
				<LeftContainer>
					<MainProject />
				</LeftContainer>
				<RightContainer>
					<ProjectFolder />
				</RightContainer>
			</Container>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	)
}

export default Projects
