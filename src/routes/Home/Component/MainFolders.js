import { Folder } from "../../SharedStyles"
import { useHistory } from "react-router-dom"

const MainFolders = () => {
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
					<span>Profile</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/projects/mainproject`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/folder.png?alt=media&token=dc9d21c9-db86-4e4f-9151-24abf941324f"
						alt="folder"
					/>
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Projects</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/contact`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg
						src="https://firebasestorage.googleapis.com/v0/b/resume-be9ab.appspot.com/o/folder.png?alt=media&token=dc9d21c9-db86-4e4f-9151-24abf941324f"
						alt="folder"
					/>
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Contact</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
		</Folder.FolderWrapper>
	)
}

export default MainFolders
