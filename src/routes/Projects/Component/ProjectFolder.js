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
			<Folder.FolderContainer onClick={() => history.push(`/projects/mainproject`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>All</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/projects/instaclone`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Instaclone</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/projects/sleact`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Sleact</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/projects/twitter`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Twitter</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/projects/smsw`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>SMSW</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/projects/ecole`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>42</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
		</Folder.FolderWrapper>
	)
}

export default ProjectFolder
