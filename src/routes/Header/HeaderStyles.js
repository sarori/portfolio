import styled from "styled-components"

export const HeaderWrapper = styled.div`
	width: 100%;
	height: 3%;
	position: relative;
	box-shadow: 0px 11px 10px 1px rgba(58, 58, 58, 0.3);
	border-bottom: solid 1px darkgray;
`
export const HeaderCover = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 1;
	background-color: #d2dae2;
	opacity: 0.9;
`
export const HeaderContent = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	z-index: 2;
`

export const UList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	overflow: hidden;
	background-color: #333;
	height: 30px;
`

export const Lst = styled.li`
	float: left;
	color: white;
	text-align: center;
	padding: 8px 16px;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		display: block;
		background-color: #b2bec3;
		opacity: 99%;
		border-radius: 4px;
	}
`
export const DropdownContent = styled.div`
	display: none;
	position: absolute;
	background-color: #333;
	opacity: 99%;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	border-radius: 4px;
	margin-top: -4px;
	cursor: pointer;
	div {
		color: white;

		padding: 8px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
		&:hover {
			background-color: #0984e3;
		}
	}
`

export const DropdownLst = styled.li`
	float: left;
	&:hover {
		background-color: #b2bec3;
		border-radius: 4px;
		display: block;
		${DropdownContent} {
			display: block;
		}
	}
`

export const DropdownBtn = styled.div`
	display: inline-block;
	color: white;
	text-align: center;
	padding: 8px 16px;
	text-decoration: none;
	cursor: pointer;
	&:hover {
		background-color: #b2bec3;
		opacity: 99%;
		border-radius: 4px;
	}
`
