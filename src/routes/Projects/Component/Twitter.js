import { PrjDetail } from "../ProjectStyles"
import { REACT, JS, FIREBASE } from "../../../colorCode"

const Twitter = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>
					Twitter Clone&nbsp;
					<img
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/twitter.png?alt=media&token=e6a69fdc-c81e-47ec-ab50-9fa9e148dbcc"
						alt="twitter"
						height="50px"
						width="50px"
					></img>
				</PrjDetail.Title>
				<PrjDetail.Desc>Fullstack web Twitter Clone</PrjDetail.Desc>
				<PrjDetail.Preview
					src={`/images/twittervideo.gif`}
					alt={"twitter video"}
					width="400px"
					height="550px"
				/>
				<PrjDetail.SubTitle>Overview</PrjDetail.SubTitle>
				<PrjDetail.Desc>
					Front-end web Twitter Clone with Firebase Real-time tweet CRUD, user
					authentication and file upload with serverless Firebase architecture.
				</PrjDetail.Desc>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Stacks</PrjDetail.SubTitle>
					<PrjDetail.CardWrapper>
						<PrjDetail.Card style={{ backgroundColor: JS }}>JavaScript</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: REACT }}>React.js</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: FIREBASE }}>
							Firebase
						</PrjDetail.Card>
					</PrjDetail.CardWrapper>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Main Features</PrjDetail.SubTitle>
					<PrjDetail.Desc>
						<li>Firebase Authentication</li>
						<li>Tweet CRUD</li>
						<li>Cloud Firestore</li>
						<li>Email, Google, Github, Social Authentication</li>
						<li>File Upload</li>
					</PrjDetail.Desc>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>
						<PrjDetail.Logo
							src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/git.png?alt=media&token=64afad30-9a94-4518-a77b-8e8ff87310c0`}
						/>
						&nbsp;Github
					</PrjDetail.SubTitle>
					<a href="https://github.com/sarori/switter" target="_blank" rel="noreferrer">
						https://github.com/sarori/switter
					</a>
				</PrjDetail.Section>
			</PrjDetail.Container>
		</PrjDetail.Wrapper>
	)
}

export default Twitter
