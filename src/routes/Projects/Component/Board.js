import { useHistory } from "react-router-dom"
import { Prj } from "../ProjectStyles"

const Board = () => {
	const history = useHistory()
	return (
		<Prj.Wrapper>
			<Prj.Container>
				<Prj.Box onClick={() => history.push(`/projects/instaclone`)}>
					<Prj.Thumbnail src={`/images/insta.png`} />
					<Prj.Title>INSTA CLONE</Prj.Title>
				</Prj.Box>

				<Prj.Box onClick={() => history.push(`/projects/twitter`)}>
					<Prj.Thumbnail src={`/images/twitter.png`} />
					<Prj.Title>Twitter CLONE</Prj.Title>
				</Prj.Box>
				<Prj.Box onClick={() => history.push(`/projects/sleact`)}>
					<Prj.Thumbnail src={`/images/slack.png`} />
					<Prj.Title>SLACK CLONE</Prj.Title>
				</Prj.Box>
				<Prj.Box onClick={() => history.push(`/projects/ecole`)}>
					<Prj.Thumbnail src={`/images/ecole.jpg`} />
					<Prj.Title>Ecole 42</Prj.Title>
				</Prj.Box>
				<Prj.Box onClick={() => history.push(`/projects/smsw`)}>
					<Prj.Thumbnail src={`/images/smsw.png`} />
					<Prj.Title>SMSW</Prj.Title>
				</Prj.Box>
				{/* <Prj.Box onClick={() => history.push(`/projects/smsw`)}>
					<Prj.Thumbnail src={`/images/insta.png`} />
					<Prj.Title>Others</Prj.Title>
				</Prj.Box> */}
			</Prj.Container>
		</Prj.Wrapper>
	)
}
export default Board
