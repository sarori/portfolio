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

		grid-auto-rows: minmax(320px, auto);
	`,
	Box: styled.div`
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		&:hover {
			background-color: lightgray;
			opacity: 80%;
		}
	`,
	Thumbnail: styled.img`
		width: 230px;
		height: 230px;
	`,
	Title: styled.div`
		font-size: 30px;
		font-weight: 800;
		margin: 10px 0;
		display: flex;
		align-items: center;
	`,
}
