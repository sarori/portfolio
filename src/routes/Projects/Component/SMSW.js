import { PrjDetail } from "../ProjectStyles"
import { REACT, TYPESCRIPT, APOLLO, GRAPHQL, STYLED, POSTGRESQL, NODEJS } from "../../../colorCode"
import { GrGlobe } from "react-icons/gr"
const SMSW = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>SMSW&nbsp;</PrjDetail.Title>
				<PrjDetail.Desc>Sunmoon University - Software Institute Website</PrjDetail.Desc>
				<PrjDetail.Preview
					src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/smsw.png?alt=media&token=83a59169-9bc6-400b-9e2c-24622190fb21`}
					alt={"SMSW"}
					width="700px"
					height="550px"
				/>
				<PrjDetail.SubTitle>Overview</PrjDetail.SubTitle>
				<PrjDetail.Desc>
					Taken a role as a front-end developer, implemented webpage. SPA react website.
				</PrjDetail.Desc>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Stacks</PrjDetail.SubTitle>
					<PrjDetail.CardWrapper>
						<PrjDetail.Card style={{ backgroundColor: TYPESCRIPT }}>
							Typescript
						</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: REACT }}>React.js</PrjDetail.Card>

						<PrjDetail.Card style={{ backgroundColor: GRAPHQL }}>
							GraphQL
						</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: APOLLO }}>Apollo</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: NODEJS }}>NodeJS</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: POSTGRESQL }}>
							PostgreSQL
						</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: STYLED }}>
							Styled Components
						</PrjDetail.Card>
					</PrjDetail.CardWrapper>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Main Features</PrjDetail.SubTitle>
					<PrjDetail.Desc>
						<li>
							Collaborating with designer and backend developer - zeplin, Adobe XD
						</li>
						<li>User SignUp / LogIn / Profile - Email user verification</li>
						<li>CMS</li>
						<li>Realtime Facility Reservation System</li>
						<li>Email, Google, Github, Social Authentication</li>
						<li>File Upload</li>
					</PrjDetail.Desc>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>
						{/* <PrjDetail.Logo
							src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/git.png?alt=media&token=64afad30-9a94-4518-a77b-8e8ff87310c0`}
						/> */}
						<GrGlobe size={23} />
						&nbsp;Website
					</PrjDetail.SubTitle>
					<a href="https://sw.sunmoon.ac.kr/" target="_blank" rel="noreferrer">
						https://sw.sunmoon.ac.kr/
					</a>
				</PrjDetail.Section>
			</PrjDetail.Container>
		</PrjDetail.Wrapper>
	)
}

export default SMSW
