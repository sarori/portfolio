import { PrjDetail } from "../ProjectStyles"
import { C } from "../../../colorCode"
import { GrGlobe } from "react-icons/gr"

const Ecole = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>
					Ecole 42&nbsp;
					<img
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/42small.png?alt=media&token=96053721-ff82-4587-9e87-b3ac8f0317c5"
						alt="insta"
						height="50px"
						width="50px"
					></img>
				</PrjDetail.Title>
				<PrjDetail.Desc>All projects I have done in ecole 42 with C.</PrjDetail.Desc>
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
						<PrjDetail.Card style={{ backgroundColor: C }}>C</PrjDetail.Card>
					</PrjDetail.CardWrapper>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Main Features</PrjDetail.SubTitle>
					<PrjDetail.Desc>
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

export default Ecole
