import { Folder } from "../../SharedStyles"
import { useHistory } from "react-router-dom"

const ProfileFolder = () => {
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
					<span>Intro</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/me`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>AboutMe</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/career`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Career</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/activities`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Activities</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
		</Folder.FolderWrapper>
	)
}

export default ProfileFolder
