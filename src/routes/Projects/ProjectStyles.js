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
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	Container: styled.div`
		width: 90%;
		margin-bottom: 5%;
	`,
	Title: styled.div`
		font-size: 45px;
		font-weight: 500;
		font-family: sans-serif;
		letter-spacing: 3px;
		margin: 5% 0 2% 0;
		display: flex;
		align-items: center;
	`,
	Desc: styled.div`
		letter-spacing: 0.9px;
		font-size: 19px;
	`,
	Logo: styled.img`
		width: 30px;
	`,
	SubTitle: styled.div`
		font-size: 28px;
		font-weight: 700;
		margin: 1% 0;
	`,
	PrjWrapper: styled.div`
		letter-spacing: 0.9px;
		font-size: 19px;
		margin-bottom: 2%;
	`,

	PrjTitle: styled.div`
		font-size: 23px;
		font-weight: 700;
		color: #273c75;
		/* margin: 0 0  0; */
	`,
	PrjDesc: styled.div`
		margin: 8px 0;
	`,
	DescBlock: styled.div`
		/* margin-top: 20px; */
	`,
	Section: styled.div`
		margin: 4% 0;
	`,
	Card: styled.span`
		background-color: lightgray;
		padding: 4px 8px;
		border-radius: 4px;
		font-weight: 600;
		margin-right: 8px;
	`,
	GreyCardWrapper: styled.div`
		display: flex;
		flex-direction: row;
		margin: 1% 0;
		align-items: center;
	`,
	GreyCard: styled.div`
		display: flex;
		align-items: center;
		background-color: lightgray;
		padding: 6px 8px;
		width: 65px;
		justify-content: center;
		border-radius: 4px;
		font-weight: 600;
		line-height: 1.3;
		margin-right: 8px;
	`,
	CardWrapper: styled.div`
		margin-top: 2%;
	`,
	Preview: styled.img`
		display: flex;
		margin: 2% auto;
		object-fit: contain;
	`,
}
