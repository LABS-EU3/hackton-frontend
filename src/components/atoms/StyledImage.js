import styled from 'styled-components';

const StyledImage = styled.div`
	width: 100%;
	height: 12rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	div {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 50%;
			border-radius: 50%;
		}
	}

	p {
		width: 100%;
		padding: 0.5rem;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		color: #444;
	}
`;
export default StyledImage;