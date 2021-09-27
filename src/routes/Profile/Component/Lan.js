import { SLan } from "../ProfileStyles"

const Lan = () => {
	return (
		<SLan.Wrapper>
			<SLan.Container>
				<SLan.ContentWrapper>
					<SLan.Title>Skills.</SLan.Title>
					<SLan.List>
						<SLan.Li>Language: TypeScript, JavaScript, C,</SLan.Li>
						<SLan.Li>
							Front-End: React, React Hooks, Apollo, HTML, Styled-components
						</SLan.Li>
						<SLan.Li>
							Back-End: Apollo Server, GraphQL, Prisma, Postgres, NodeJS
						</SLan.Li>
					</SLan.List>
				</SLan.ContentWrapper>
				<SLan.Line></SLan.Line>
				<SLan.ContentWrapper>
					<SLan.Title>Language.</SLan.Title>
					<SLan.List>
						<SLan.Li>Korean : Native</SLan.Li>
						<SLan.Li>English : Fluent</SLan.Li>
					</SLan.List>
				</SLan.ContentWrapper>
				<SLan.Line></SLan.Line>
				<SLan.ContentWrapper>
					<SLan.Title>Education.</SLan.Title>{" "}
					<SLan.List>
						<SLan.Li>2019 - Present | école 42, Paris, France</SLan.Li>{" "}
						<SLan.Li>
							2015 - 2019 | Hanyang University, Seoul, South Korea / Bachelor Degree
							Major of Information System
						</SLan.Li>
					</SLan.List>
				</SLan.ContentWrapper>
			</SLan.Container>
		</SLan.Wrapper>
	)
}

export default Lan
