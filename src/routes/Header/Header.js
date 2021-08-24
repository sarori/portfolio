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
					<HStyle.List onClick={() => history?.push(`/`)}>Home</HStyle.List>
					<HStyle.List onClick={() => history.push(`/contact`)}>Contact</HStyle.List>
					<HStyle.List class="dropdown">
						<a href="javascript:void(0)" class="dropbtn">
							Dropdown
						</a>
						<div class="dropdown-content">
							<a href="#">Link 1</a>
							<a href="#">Link 2</a>
							<a href="#">Link 3</a>
						</div>
					</HStyle.List>
				</HStyle.UList>
			</HeaderContent>
		</HeaderWrapper>
	)
}

export default Header
