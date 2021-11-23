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
						alt="logo"
						height="50px"
						width="50px"
					></img>
				</PrjDetail.Title>
				<PrjDetail.Desc>All projects I have done in ecole 42.</PrjDetail.Desc>
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
					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Libft</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							Libft - recreated Standard C library functions.
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>
					<PrjDetail.PrjWrapper>
						<PrjDetail.PrjTitle>Get_Next_Line</PrjDetail.PrjTitle>
						<PrjDetail.PrjDesc>
							a project to recode the getline(3) C standard Libarary functions.
							&nbsp;&nbsp;- Allowed to use read, malloc, free functions.
						</PrjDetail.PrjDesc>
					</PrjDetail.PrjWrapper>
					<PrjDetail.Desc>
						<li>Libft - recreated Standard C library functions.</li>

						<li>
							Get_Next_Line - a project to recode the getline(3) C standard Libarary
							functions. - Allowed to use read, malloc, free functions.
						</li>
						<li>
							Fillit - a project is related to find a way to assemble some given
							Tetriminos in to the smallest possible square. - Recursive backtracking
							algorithm - Optimization
						</li>
						<li>Ft_printf - recreated the Standard C Library printf() functions.</li>
						<li>Init - System and Network Administration Project - Php Piscine</li>
						<li>Php Piscine</li>
						<li>
							Ft_ssl_md5 - C implementation of the OpenSSL Library, with the md5 and
							sha256 functions.
						</li>
						<li>
							Docker - a project in the system and network administration branch for
							how to use containers to deploy code in different operating systems or
							with different configurations.
						</li>
						<li>
							Filler - purpose of project is implementing a player and playing a game
							against school's VM machine player by using Heatmap algorithm.
						</li>
					</PrjDetail.Desc>
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
