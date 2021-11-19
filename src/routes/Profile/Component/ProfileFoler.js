import { Folder } from "../../SharedStyles"
import { useHistory } from "react-router-dom"

const ProfileFolder = () => {
	const history = useHistory()
	return (
		<Folder.FolderWrapper>
			<Folder.FolderContainer onClick={() => history.push(`/`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/folder.png?alt=media&token=dc9d21c9-db86-4e4f-9151-24abf941324f"
						alt="folder"
					/>
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Home</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/intro`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/folder.png?alt=media&token=dc9d21c9-db86-4e4f-9151-24abf941324f"
						alt="folder"
					/>
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Intro</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/me`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/folder.png?alt=media&token=dc9d21c9-db86-4e4f-9151-24abf941324f"
						alt="folder"
					/>
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>AboutMe</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/career`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/folder.png?alt=media&token=dc9d21c9-db86-4e4f-9151-24abf941324f"
						alt="folder"
					/>
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Career</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/activities`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/folder.png?alt=media&token=dc9d21c9-db86-4e4f-9151-24abf941324f"
						alt="folder"
					/>
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Activities</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
		</Folder.FolderWrapper>
	)
}

export default ProfileFolder
