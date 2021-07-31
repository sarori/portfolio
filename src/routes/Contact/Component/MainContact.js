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
								<img src={"/images/git.png"} alt="github" />
							</Contact.TextWrapper>
						</Contact.BRight>
						<Contact.BRight style={{ width: "180px" }}>
							<Contact.TextWrapper>
								<Contact.Text>07.66.23.20.44&nbsp;&nbsp;</Contact.Text>{" "}
								<img src={"/images/phone.png"} alt="phone" />
							</Contact.TextWrapper>
						</Contact.BRight>
						<Contact.BRight
							href="mailto:salo3678@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
							style={{ width: "230px" }}
						>
							<Contact.TextWrapper>
								<Contact.Text>salo3678@gmail.com&nbsp;&nbsp;</Contact.Text>{" "}
								<img src={"/images/mail.png"} alt="email" />
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
								<img src={"/images/facebook.png"} alt="facebook" />
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
