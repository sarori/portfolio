import { useHistory } from "react-router-dom"
import {
	DropdownBtn,
	DropdownContent,
	DropdownLst,
	HeaderContent,
	HeaderCover,
	HeaderWrapper,
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
					<DropdownLst>
						<DropdownBtn>Profile</DropdownBtn>
						<DropdownContent>
							<div onClick={() => history.push(`/profile/intro`)}>Intro</div>
							<div onClick={() => history.push(`/profile/me`)}>About Me</div>
							<div onClick={() => history.push(`/profile/career`)}>Career</div>
							<div onClick={() => history.push(`/profile/activities`)}>
								Activities
							</div>
							<div onClick={() => history.push(`/profile/awards`)}>Awards</div>
						</DropdownContent>
					</DropdownLst>
					<DropdownLst>
						<DropdownBtn>Projects</DropdownBtn>
						<DropdownContent>
							<div onClick={() => history?.push(`/projects/all`)}>All Projects</div>
							<div onClick={() => history?.push(`/projects/smsw`)}>SMSW</div>

							<div onClick={() => history?.push(`/projects/instaclone`)}>
								Instaclone
							</div>
							<div onClick={() => history?.push(`/projects/sleact`)}>Sleact</div>
							<div onClick={() => history?.push(`/projects/twitter`)}>Twitter</div>
							<div onClick={() => history?.push(`/projects/ecole`)}>42</div>
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
