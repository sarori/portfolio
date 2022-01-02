import { PrjDetail } from "../ProjectStyles"
import { C, CSS, HTML, JS, NODEJS } from "../../../colorCode"
import { GrGlobe } from "react-icons/gr"

const Ecole = () => {
	return (
		<PrjDetail.Wrapper>
			<PrjDetail.Container>
				<PrjDetail.Title>
					Ecole 42&nbsp;
					<img
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/42small.png?alt=media&token=96053721-ff82-4587-9e87-b3ac8f0317c5"
						alt="logo"
						height="50px"
						width="50px"
					></img>
				</PrjDetail.Title>
				<PrjDetail.Desc>All projects I have done in ecole 42.</PrjDetail.Desc>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Stacks</PrjDetail.SubTitle>
					<PrjDetail.CardWrapper>
						<PrjDetail.Card style={{ backgroundColor: C }}>C</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: HTML }}>HTML</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: CSS }}>CSS</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: JS }}>Javascript</PrjDetail.Card>
						<PrjDetail.Card style={{ backgroundColor: NODEJS }}>Node.js</PrjDetail.Card>
					</PrjDetail.CardWrapper>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>Main Features</PrjDetail.SubTitle>
					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Libft</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							42Libft is an open source C library with over 200++ functions. I
							recreated Standard C library functions.(stdio, stdlib, string, ctype,
							math)
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>
					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Get_Next_Line</PrjDetail.PrjTitle>
						<PrjDetail.DescBlock>
							<PrjDetail.PrjDesc>
								a project to recode the getline(3) C standard Libarary functions.
							</PrjDetail.PrjDesc>
							<li style={{ listStyle: "none" }}>
								&nbsp;&nbsp;&nbsp;&nbsp;- Allowed to use read, malloc, free
								functions.
							</li>
						</PrjDetail.DescBlock>
					</PrjDetail.PrjWrapper>

					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Fillit</PrjDetail.PrjTitle>
						<PrjDetail.DescBlock>
							<PrjDetail.PrjDesc>
								a project is related to find a way to assemble some given Tetriminos
								in to the smallest possible square.
							</PrjDetail.PrjDesc>
							<li style={{ listStyle: "none", marginBottom: "5px" }}>
								&nbsp;&nbsp;&nbsp;&nbsp;- Recursive backtracking algorithm
							</li>
							<li style={{ listStyle: "none" }}>
								&nbsp;&nbsp;&nbsp;&nbsp;- Optimization
							</li>
						</PrjDetail.DescBlock>
					</PrjDetail.PrjWrapper>

					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Ft_printf</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							Recreated the Standard C Library printf() functions.
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>

					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Init</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							System and Network Administration Project
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>

					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Php Piscine</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							Learned basic web with Node.js / Mysql / Html / Css / Javascript
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>

					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Ft_ssl_md5</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							C implementation of the OpenSSL Library, with the md5 and sha256
							functions.
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>

					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Docker</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							a project in the system and network administration branch for how to use
							containers to deploy code in different operating systems or with
							different configurations.
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>

					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Filler</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							purpose of project is implementing a player and playing a game against
							school's VM machine player by using Heatmap algorithm.
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>
				</PrjDetail.Section>
				<PrjDetail.Section>
					<PrjDetail.SubTitle>
						<PrjDetail.Logo
							src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/git.png?alt=media&token=64afad30-9a94-4518-a77b-8e8ff87310c0`}
						/>
						&nbsp;Github &nbsp;
					</PrjDetail.SubTitle>
					<a href="https://github.com/sarori/42-Paris" target="_blank" rel="noreferrer">
						https://github.com/sarori/42-Paris
					</a>
				</PrjDetail.Section>
			</PrjDetail.Container>
		</PrjDetail.Wrapper>
	)
}

export default Ecole
