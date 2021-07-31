import Footer from "../Home/Component/Footer"
import {
	Container,
	FooterWrapper,
	LeftContainer,
	RightContainer,
	Wrapper,
} from "../Home/HomeStyles"
import MainProfile from "./Component/MainProfile"
import ProfileFolder from "./Component/ProfileFoler"

const Profile = () => {
	return (
		<Wrapper>
			<Container>
				<LeftContainer>
					<MainProfile />
				</LeftContainer>
				<RightContainer>
					<ProfileFolder />
				</RightContainer>
			</Container>
			<FooterWrapper>
				<Footer />
			</FooterWrapper>
		</Wrapper>
	)
}

export default Profile
