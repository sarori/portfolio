import { useParams } from "react-router-dom"
import Footer from "../Home/Component/Footer"
import {
	Container,
	FooterWrapper,
	LeftContainer,
	RightContainer,
	Wrapper,
} from "../Home/HomeStyles"
import ExpFolder from "./Component/ExpFolder"
import MainExp from "./Component/MainExp"

const Experiences = () => {
	return (
		<Wrapper>
			<Container>
				<LeftContainer>
					<MainExp />
				</LeftContainer>
				<RightContainer>
					<ExpFolder />
				</RightContainer>
			</Container>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	)
}

export default Experiences
