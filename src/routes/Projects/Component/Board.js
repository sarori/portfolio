import { useHistory } from "react-router-dom"
import { Prj } from "../ProjectStyles"

const Board = () => {
	const history = useHistory()
	return (
		<Prj.Wrapper>
			<Prj.Container>
				<Prj.Box onClick={() => history.push(`/projects/instaclone`)}>Instaclone</Prj.Box>
				<Prj.Box>Sleact</Prj.Box>
				<Prj.Box>SMSW</Prj.Box>
				<Prj.Box>Twitter</Prj.Box>
				<Prj.Box>Ecole 42</Prj.Box>
				<Prj.Box>Others</Prj.Box>
				{/* <Prj.Box>Others</Prj.Box> */}
			</Prj.Container>
		</Prj.Wrapper>
	)
}
export default Board
