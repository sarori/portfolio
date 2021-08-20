import Footer from "../Home/Component/Footer"
import {
	Container,
	FooterWrapper,
	LeftContainer,
	RightContainer,
	Wrapper,
} from "../Home/HomeStyles"
import MainProfile from "../Profile/Component/MainProfile"
import ProjectFolder from "./Component/ProjectFolder"

const Projects = () => {
	return (
		<Wrapper>
			<Container>
				<LeftContainer>
					<MainProfile />
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
