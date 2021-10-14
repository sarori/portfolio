import styled from "styled-components"

export const Exp = {
	Wrapper: styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
	`,
	Container: styled.div`
		width: 80%;
		height: 100%;
		margin: 4% 0;
	`,
}

export const CareerStyle = {
	Col: styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 4%;
	`,

	Box: styled.div`
		width: 95%;
		height: 30%;
		border: 1px solid lightgray;
		margin: 2%;
		padding: 2%;
	`,
	BoxRow: styled.div`
		border: 1px solid lightgray;
	`,
	Period: styled.div`
		font-size: 20px;
		color: darkgray;
		margin: 2% 0 0 1%;
	`,
	Title: styled.div`
		font-size: 28px;
		font-weight: 500;
	`,
	Desc: styled.div`
		font-size: 20px;
		li {
			margin: 1% 0;
		}
	`,
	Main: styled.div`
		margin: 3% 3%;
		font-size: 20px;
	`,
}
