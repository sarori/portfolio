import { PrjDetail } from "../ProjectStyles"

const Insta = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>
					Insta Clone{" "}
					<img
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/insta.png?alt=media&token=7b7e9dd7-a990-460b-a800-a7c4e802bda8"
						alt="insta"
						height="40px"
						width="40px"
					></img>
				</PrjDetail.Title>
				<PrjDetail.Desc>
					Fullstack web Instagram Clone -->&nbsp;
					<a
						href="https://github.com/sarori/instaclone-web"
						target="_blank"
						rel="noreferrer"
					>
						<PrjDetail.Logo src={`/images/git.png`} />
					</a>
					<ul>
						<li>AWS S3</li>
					</ul>
				</PrjDetail.Desc>
				<PrjDetail.SubTitle>Stacks</PrjDetail.SubTitle>
				<PrjDetail.Lst>
					<li>Front-end : React.js / Typescript / Apollo / Styled Components</li>
					<li>Back-end : Apollo Server, GraphQL / Prisma</li>
					<li>Database: Prisma / Postgresql</li>
				</PrjDetail.Lst>
				<PrjDetail.SubTitle>Main Features</PrjDetail.SubTitle>
				Email LogIn User Profile Follow / Un Follow Direct Message Search Photo Like Photo
				Comment on Photos Photo Feed Upload Photo
			</PrjDetail.Container>
		</PrjDetail.Wrapper>
	)
}

export default Insta
