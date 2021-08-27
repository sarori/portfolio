import styled from "styled-components"

export const Prj = {
	Wrapper: styled.div`
		width: 100%;
		height: 100%;
	`,
	Container: styled.div`
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0px;
		height: 100%;
		grid-auto-rows: minmax(150px, auto);
	`,
	Box: styled.div`
		border: 1px solid red;
		cursor: pointer;
		&:hover {
			background-color: lightgray;
			opacity: 80%;
		}
	`,
	Thumbnail: styled.div``,
}
