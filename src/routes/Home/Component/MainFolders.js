import { Folder } from "../../SharedStyles"
import { useHistory } from "react-router-dom"

const MainFolders = () => {
	const history = useHistory()
	return (
		<Folder.FolderWrapper>
			<Folder.FolderContainer onClick={() => history.push(`/`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Home</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/intro`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Profile</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/projects`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Projects</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/experiences/career`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Experiences</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/contact`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Contact</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
		</Folder.FolderWrapper>
	)
}

export default MainFolders
