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
export const PrjDetail = {
	Wrapper: styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	`,
	Container: styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
	`,
	Title: styled.div`
		font-size: 30px;
		font-weight: 800;
		color: #0652dd;
	`,
	Desc: styled.div`
		font-size: 20px;
	`,
	Logo: styled.img`
		width: 30px;
		height: 30px;
	`,
	Lst: styled.ul`
		font-size: 19px;
	`,
	SubTitle: styled.div`
		font-size: 27px;
		font-weight: 700;
		color: #feca57;
	`,
}
