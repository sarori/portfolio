import { PrjDetail } from "../ProjectStyles"
import {
	REACT,
	TYPESCRIPT,
	APOLLO,
	GRAPHQL,
	HOOK,
	STYLED,
	PRISMA,
	POSTGRESQL,
} from "../../../colorCode"

const Insta = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>
					Insta Clone&nbsp;
					<img
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/insta.png?alt=media&token=7b7e9dd7-a990-460b-a800-a7c4e802bda8"
						alt="insta"
						height="50px"
						width="50px"
					></img>
				</PrjDetail.Title>
				<PrjDetail.Desc>Fullstack web Instagram Clone</PrjDetail.Desc>
				<PrjDetail.Preview
					src={`/images/twittervideo.gif`}
					alt={"twitter video"}
					width="400px"
					height="550px"
				/>
				{/* <PrjDetail.SubTitle>Overview</PrjDetail.SubTitle>
				<PrjDetail.Desc>
					Front-end web Twitter Clone with Firebase Real-time tweet CRUD, user
					authentication and file upload with serverless Firebase architecture.
				</PrjDetail.Desc> */}
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Stacks</PrjDetail.SubTitle>
					<PrjDetail.CardWrapper>
						<PrjDetail.Card style={{ backgroundColor: TYPESCRIPT }}>
							Typescript
						</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: REACT }}>React.js</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: HOOK }}>
							React Hooks
						</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: GRAPHQL }}>
							GraphQL
						</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: APOLLO }}>Apollo</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: PRISMA }}>Prisma</PrjDetail.Card>
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
						<li>Login and Signup / Feed / Profile</li>
						<li>Email user verification</li>
						<li>CRUD</li>
						<li>AWS S3</li>
						<li>real-time direct Messages</li>
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
					<PrjDetail.GreyCardWrapper>
						<PrjDetail.GreyCard>Backend</PrjDetail.GreyCard>

						<a
							href="https://github.com/sarori/instaclone-backend"
							target="_blank"
							rel="noreferrer"
						>
							https://github.com/sarori/instaclone-backend
						</a>
					</PrjDetail.GreyCardWrapper>
					<PrjDetail.GreyCardWrapper>
						<PrjDetail.GreyCard>Frontend</PrjDetail.GreyCard>
						<a
							href="https://github.com/sarori/instaclone-web"
							target="_blank"
							rel="noreferrer"
						>
							https://github.com/sarori/instaclone-web
						</a>
					</PrjDetail.GreyCardWrapper>
				</PrjDetail.Section>
			</PrjDetail.Container>
		</PrjDetail.Wrapper>
	)
}
export default Insta
