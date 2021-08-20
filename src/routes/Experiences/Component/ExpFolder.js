import { Folder } from "../../SharedStyles"
import { useHistory } from "react-router-dom"

const ExpFolder = () => {
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
			<Folder.FolderContainer onClick={() => history.push(`/experiences/awards`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Awards</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/experiences/career`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Career</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
			<Folder.FolderContainer onClick={() => history.push(`/experiences/others`)}>
				<Folder.FolderimgDiv>
					<Folder.Folderimg src="/images/folder.png" alt="folder" />
				</Folder.FolderimgDiv>
				<Folder.FolderName>
					<span>Others</span>
				</Folder.FolderName>
			</Folder.FolderContainer>
		</Folder.FolderWrapper>
	)
}

export default ExpFolder
