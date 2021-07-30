import styled from "styled-components"

export const Contact = {
	Header: styled.div`
		background-color: #4b4b4b;
		width: 100%;
		height: 12%;
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid black;
	`,
	To: styled.div`
		color: lightgray;
		font-size: 17px;
	`,
	Name: styled.div`
		color: white;
		font-weight: 600;
		font-size: 18px;
	`,
	Body: styled.div`
		display: flex;
		flex-direction: column;
		margin-top: 2%;
		align-items: flex-end;
	`,
	BLeft: styled.div`
		display: flex;
		min-width: 1.5rem;
		min-height: 35px;
		max-width: 40vh;
		width: 20%;
		border-top-right-radius: 12px;
		border-top-left-radius: 12px;
		border-bottom-right-radius: 12px;
		margin: 10px;
		margin-right: 77%;
		justify-content: flex-start;
		opacity: 90%;
		background-color: #4b4b4b;
		color: white;
		align-items: center;
		padding-left: 1%;
		font-weight: 600;
		font-size: 18px;
	`,
	BRight: styled.a`
		display: flex;
		min-width: 1.5rem;
		min-height: 35px;
		max-width: 40vh;
		align-items: center;
		border-top-right-radius: 12px;
		border-top-left-radius: 12px;
		border-bottom-left-radius: 12px;
		margin: 10px;
		background-color: #0080ff;
		justify-content: flex-end;
		margin-right: 2%;
		text-decoration: none;
	`,
	TextWrapper: styled.div`
		display: flex;
		margin: 0 10px 0 10px;
		font-weight: 600;
		font-size: 18px;
		color: white;
		img {
			width: 30px;
			height: 30px;
		}
	`,
	Text: styled.span`
		display: flex;
		align-items: center;
	`,
}
