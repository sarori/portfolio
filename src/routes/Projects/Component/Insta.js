import { PrjDetail } from "../ProjectStyles"

const Insta = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>Insta Clone</PrjDetail.Title>
				<PrjDetail.Desc>
					Fullstack web Instagram Clone
					<a
						href="https://github.com/sarori/instaclone-web"
						target="_blank"
						rel="noreferrer"
					>
						<PrjDetail.Logo src={`/images/git.png`} />
					</a>
					<ul>
						<li>CMS</li>
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
			</PrjDetail.Container>
		</PrjDetail.Wrapper>
	)
}

export default Insta
