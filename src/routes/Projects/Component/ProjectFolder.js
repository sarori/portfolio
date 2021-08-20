import { Folder } from "../../SharedStyles"
import { useHistory } from "react-router-dom"

const ProjectFolder = () => {
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
			{/* <Folder.FolderContainer onClick={() => history.push(`/profile/intro`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Awards</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/lan`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Career</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/profile/lan`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Others</span>
				</Folder.FolderName>
			</Folder.FolderContainer> */}
		</Folder.FolderWrapper>
	)
}

export default ProjectFolder
