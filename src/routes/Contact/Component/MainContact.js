import { useHistory } from "react-router-dom"
import { FileScreen } from "../../SharedStyles"
import { Contact } from "../ContactStyles"

const MainContact = () => {
	const history = useHistory()
	return (
		<FileScreen.Wrapper>
			<FileScreen.Container>
				<FileScreen.Top>
					<FileScreen.RoundBtn onClick={() => history.push("/")}></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
					<FileScreen.RoundBtn></FileScreen.RoundBtn>
				</FileScreen.Top>
				<FileScreen.Body>
					<Contact.Header>
						<Contact.To>To:&nbsp;&nbsp;</Contact.To>{" "}
						<Contact.Name>Saro Park</Contact.Name>
					</Contact.Header>
					<Contact.Body>
						<Contact.BLeft>How Can I Contact You?</Contact.BLeft>
						<Contact.BRight
							href="https://github.com/sarori"
							target="_blank"
							rel="noopener noreferrer"
							style={{ width: "120px" }}
						>
							<Contact.TextWrapper>
								<Contact.Text>Github&nbsp;&nbsp;</Contact.Text>{" "}
								<img
									src={
										"https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/git.png?alt=media&token=64afad30-9a94-4518-a77b-8e8ff87310c0"
									}
									alt="github"
								/>
							</Contact.TextWrapper>
						</Contact.BRight>
						<Contact.BRight style={{ width: "180px" }}>
							<Contact.TextWrapper>
								<Contact.Text>07.66.23.20.44&nbsp;&nbsp;</Contact.Text>{" "}
								<img
									src={
										"https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/phone.png?alt=media&token=b6631b30-c63d-4bbe-b774-86d2753d38af"
									}
									alt="phone"
								/>
							</Contact.TextWrapper>
						</Contact.BRight>
						<Contact.BRight
							href="mailto:saropark.dev@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ width: "260px" }}
						>
							<Contact.TextWrapper>
								<Contact.Text>saropark.dev@gmail.com&nbsp;&nbsp;</Contact.Text>{" "}
								<img
									src={
										"https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/mail.png?alt=media&token=d7f11aac-88ca-47ed-b3e1-44132171f4db"
									}
									alt="email"
								/>
							</Contact.TextWrapper>
						</Contact.BRight>

						<Contact.BRight
							href="https://www.facebook.com/sarori.saro.park/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ width: "140px" }}
						>
							<Contact.TextWrapper>
								<Contact.Text>Facebook&nbsp;&nbsp;</Contact.Text>{" "}
								<img
									src={
										"https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/facebook.png?alt=media&token=6338ec2b-abac-41a7-8f7e-b53e0ce88e1d"
									}
									alt="facebook"
								/>
							</Contact.TextWrapper>
						</Contact.BRight>

						<Contact.BRight style={{ width: "135px" }}>
							<Contact.TextWrapper>
								<Contact.Text> Thank you&nbsp;💕 </Contact.Text>
							</Contact.TextWrapper>
						</Contact.BRight>
					</Contact.Body>
				</FileScreen.Body>
			</FileScreen.Container>
		</FileScreen.Wrapper>
	)
}

export default MainContact
