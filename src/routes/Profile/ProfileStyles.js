import styled from "styled-components"

export const SIntro = {
	Wrapper: styled.div`
		width: 100%;
		height: 100%;
	`,
	Container: styled.div`
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 4% 0 5% 0;
	`,
	Title: styled.div`
		font-size: 30px;
		font-weight: 600;
		margin: 1% 0;
	`,
	ContentWrapper: styled.div`
		display: flex;
		flex-direction: row;
		width: 80%;
		height: 75%;
		/* margin: 3% 0 1% 0; */
	`,
	DetailWrapper: styled.div`
		display: flex;
		flex-direction: column;

		width: 80%;
		height: 100%;
	`,
	IntroWrapper: styled.div`
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		height: 75%;
		margin: 3% 0 1% 0;
		padding-bottom: 5%;
	`,
	Img: styled.img`
		width: 60%;
		height: 100%;
	`,
	Intro: styled.div`
		font-size: 22px;
		margin: 2% 0;
		line-height: 32px;
	`,
	Desc: styled.div`
		div {
			margin: 5%;
		}
	`,
	Info: styled.span`
		cursor: pointer;
		&:hover {
			color: #2358c9;
		}
	`,
}

export const SLan = {
	Wrapper: styled.div`
		width: 100%;
		height: 100%;
	`,
	Container: styled.div`
		width: 80%;
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 0 auto;
	`,
	Title: styled.div`
		font-size: 30px;
		font-weight: 600;
		margin-top: 3%;
	`,
	List: styled.ul``,
	Li: styled.li`
		margin: 0 0 15px 0;
		font-size: 17px;
	`,
	ContentWrapper: styled.div`
		display: flex;
		flex-direction: column;
	`,
	DetailWrapper: styled.div`
		display: flex;
		flex-direction: column;
		width: 75%;
		height: 100%;
	`,
	Img: styled.img`
		width: 25%;
		height: 100%;
	`,
	Intro: styled.div``,
	Desc: styled.div``,
	Info: styled.div`
		cursor: pointer;
	`,
	Line: styled.div`
		border: 1px solid lightgray;
		width: 99%;
	`,
}
