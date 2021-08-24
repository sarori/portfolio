import { useHistory } from "react-router-dom"
import {
	DropdownBtn,
	DropdownContent,
	DropdownLst,
	HeaderContent,
	HeaderCover,
	HeaderWrapper,
	HStyle,
	Lst,
	UList,
} from "./HeaderStyles"

const Header = () => {
	const history = useHistory()
	if (!history) {
		return <div>Loading</div>
	}
	return (
		<HeaderWrapper>
			<HeaderCover></HeaderCover>
			<HeaderContent>
				<UList>
					<Lst>
						<div onClick={() => history?.push(`/`)}>Home</div>
					</Lst>
					<DropdownLst className="dropdown">
						<DropdownBtn>Profile</DropdownBtn>
						<DropdownContent>
							<div onClick={() => history.push(`/profile/intro`)}>Intro</div>
							<div onClick={() => history.push(`/profile/lan`)}>Lan & Skills</div>
						</DropdownContent>
					</DropdownLst>
					<Lst>
						<div onClick={() => history?.push(`/contact`)}>Contact</div>
					</Lst>
				</UList>
			</HeaderContent>
		</HeaderWrapper>
	)
}

export default Header
