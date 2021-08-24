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

export const HStyle = {
	UList: styled.ul`
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #333;
	`,
	Lst: styled.li`
		float: left;
		div {
			display: inline-block;
			color: white;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
			&:hover {
				background-color: red;
			}
		}

		& .dropdown-content {
			display: block;
			position: absolute;
			background-color: #f9f9f9;
			min-width: 160px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			z-index: 1;
			div {
				color: black;
				padding: 12px 16px;
				text-decoration: none;
				display: block;
				text-align: left;
				&:hover {
					background-color: #f1f1f1;
					display: block;
				}
			}
		}
		&.dropdown {
			display: inline-block;
			&:hover {
				display: block;
				background-color: red;
			}
		}
		&.dropbtn {
			background-color: red;
			display: inline-block;
			color: white;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
		}
	`,
}
