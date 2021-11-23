import { PrjDetail } from "../ProjectStyles"
import { REACT, TYPESCRIPT, EMOTION } from "../../../colorCode"

const Sleact = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>
					Slack Clone&nbsp;
					<img
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/slack.png?alt=media&token=b707c3b0-a331-457d-ad2b-84c60c928195"
						alt="twitter"
						height="50px"
						width="50px"
					></img>
				</PrjDetail.Title>
				<PrjDetail.Desc>Front-end web Slack Clone</PrjDetail.Desc>
				<PrjDetail.Preview
					src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/slackvideo.gif?alt=media&token=a67f4ab4-6ba6-4c7d-bbc5-b4bd81642cd7`}
					alt={"twitter video"}
					width="85%"
					// height="
					// 400px"
				/>
				<PrjDetail.SubTitle>Overview</PrjDetail.SubTitle>
				<PrjDetail.Desc>
					Implemented sign up, login, real-time chat. Invite users into workspace for
					channel and dm and enable to create channel and chat room for chatting and
					upload photos, user mentions, show online-list user
				</PrjDetail.Desc>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Stacks</PrjDetail.SubTitle>
					<PrjDetail.CardWrapper>
						<PrjDetail.Card style={{ backgroundColor: TYPESCRIPT }}>
							Typescript
						</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: REACT }}>React.js</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: EMOTION }}>
							Emotion
						</PrjDetail.Card>
					</PrjDetail.CardWrapper>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Main Features</PrjDetail.SubTitle>
					<PrjDetail.Desc>
						<li>Socket.io - Realtime chatting</li>
						<li>SWR</li>
						<li>Webpack setting</li>
						<li>Custom hooks - useInput, useSocket</li>
						<li>User SignUp / LogIn</li>
						<li>Upload photos / user mentions / online-list users</li>
					</PrjDetail.Desc>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>
						<PrjDetail.Logo
							src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/git.png?alt=media&token=64afad30-9a94-4518-a77b-8e8ff87310c0`}
						/>
						&nbsp;Github
					</PrjDetail.SubTitle>
					<a
						href="https://github.com/sarori/Slack-clone"
						target="_blank"
						rel="noreferrer"
					>
						https://github.com/sarori/Slack-clone
					</a>
				</PrjDetail.Section>
			</PrjDetail.Container>
		</PrjDetail.Wrapper>
	)
}

export default Sleact
