import { useHistory } from "react-router-dom"
import { HeaderContent, HeaderCover, HeaderWrapper, HStyle } from "./HeaderStyles"

const Header = () => {
	const history = useHistory()
	if (!history) {
		return <div>Loading</div>
	}
	return (
		<HeaderWrapper>
			<HeaderCover></HeaderCover>
			<HeaderContent>
				<HStyle.UList>
					<HStyle.Lst>
						<div onClick={() => history?.push(`/`)}>Home</div>
					</HStyle.Lst>
					<HStyle.Lst className="dropdown">
						<div className="dropbtn" onClick={() => history?.push(`/profile/intro`)}>
							Profile
						</div>
						<div className="dropdown-content">
							<div onClick={() => history.push(`/profile/intro`)}>Intro</div>
							<div onClick={() => history.push(`/profile/lan`)}>Lan & Skills</div>
						</div>
					</HStyle.Lst>
					<HStyle.Lst>
						<div onClick={() => history?.push(`/contact`)}>Contact</div>
					</HStyle.Lst>
				</HStyle.UList>
				{/* <HStyle.UList>
					<HStyle.List onClick={() => history?.push(`/`)}>Home</HStyle.List>
					<HStyle.Dropdown>
						Profile
						<HStyle.DropdownContent class="dropdown-content">
							<div onClick={() => history.push(`/profile/intro`)}>Intro</div>
							<div onClick={() => history.push(`/profile/lan`)}>Lan & Skills</div>
						</HStyle.DropdownContent>
					</HStyle.Dropdown>
					<HStyle.List onClick={() => history.push(`/projects`)}>Projects</HStyle.List>
					<HStyle.Dropdown>
						Experiences
						<HStyle.DropdownContent class="dropdown-content">
							<div onClick={() => history.push(`/experiences/career`)}>Career</div>
							<div onClick={() => history.push(`/experiences/awards`)}>Awards</div>
							<div onClick={() => history.push(`/experiences/activities`)}>
								Activities
							</div>
						</HStyle.DropdownContent>
					</HStyle.Dropdown>
					<HStyle.List onClick={() => history.push(`/contact`)}>Contact</HStyle.List>
				</HStyle.UList> */}
			</HeaderContent>
		</HeaderWrapper>
	)
}

export default Header
