import { PrjDetail } from "../ProjectStyles"

const Twitter = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>Twitter Clone</PrjDetail.Title>

				<img
					src={`/images/twittervideo.gif`}
					alt={"twitter video"}
					width="400px"
					height="550px"
				/>
				<PrjDetail.Desc>
					Fullstack web Twitter Clone
					<a
						href="https://github.com/sarori/instaclone-web"
						target="_blank"
						rel="noreferrer"
					>
						<PrjDetail.Logo src={`/images/git.png`} />
					</a>
					<ul>
						<li>Firebase</li>
						<li>Cloud Firestore</li>
						<li>NoSQL Realtime, Query, Filter</li>
						<li>Firebase Authentication</li>
						<li>Google Cloud Storage</li>
					</ul>
				</PrjDetail.Desc>
				<PrjDetail.SubTitle>Stacks</PrjDetail.SubTitle>
				<PrjDetail.Lst>
					<li>Language : React.js, HTML/CSS/JavaScript</li>
				</PrjDetail.Lst>
				<PrjDetail.SubTitle>Main Features</PrjDetail.SubTitle>
				<ul>
					<li>Email, Google, Github, Social Authentication</li>
					<li>Tweet CRUD</li>
					<li>Protected Pages</li>
					<li>Profile Page</li>
					<li>File Upload</li>
					<li>Deploy</li>
					<li>API Key Security</li>
				</ul>
			</PrjDetail.Container>
		</PrjDetail.Wrapper>
	)
}

export default Twitter
