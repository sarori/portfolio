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
	`,
	Title: styled.div`
		font-size: 30px;
		font-weight: 600;
		margin: 1% 0;
	`,
	ContentWrapper: styled.div`
		display: flex;
		flex-direction: row;
		border: 1px solid red;
		width: 80%;
		height: 50%;
	`,
	DetailWrapper: styled.div`
		display: flex;
		flex-direction: column;
		border: 1px solid red;

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
