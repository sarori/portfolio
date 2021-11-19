import { useHistory } from "react-router-dom"
import { Prj } from "../ProjectStyles"

const Board = () => {
	const history = useHistory()
	return (
		<Prj.Wrapper>
			<Prj.Container>
				<Prj.Box onClick={() => history.push(`/projects/instaclone`)}>
					<Prj.Thumbnail
						src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/insta.png?alt=media&token=7b7e9dd7-a990-460b-a800-a7c4e802bda8`}
					/>
					<Prj.Title>INSTA CLONE</Prj.Title>
				</Prj.Box>

				<Prj.Box onClick={() => history.push(`/projects/twitter`)}>
					<Prj.Thumbnail
						src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/twitter.png?alt=media&token=e6a69fdc-c81e-47ec-ab50-9fa9e148dbcc`}
					/>
					<Prj.Title>Twitter CLONE</Prj.Title>
				</Prj.Box>
				<Prj.Box onClick={() => history.push(`/projects/sleact`)}>
					<Prj.Thumbnail
						src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/slack.png?alt=media&token=b707c3b0-a331-457d-ad2b-84c60c928195`}
					/>
					<Prj.Title>SLACK CLONE</Prj.Title>
				</Prj.Box>
				<Prj.Box onClick={() => history.push(`/projects/ecole`)}>
					<Prj.Thumbnail
						src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/42.jpg?alt=media&token=658e5135-5cc3-44d6-b5d1-f4de953de828`}
					/>
					<Prj.Title>Ecole 42</Prj.Title>
				</Prj.Box>
				<Prj.Box onClick={() => history.push(`/projects/smsw`)}>
					<Prj.Thumbnail
						src={`https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/smsw.png?alt=media&token=83a59169-9bc6-400b-9e2c-24622190fb21`}
					/>
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
