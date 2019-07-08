import * as React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
	children?: React.ReactChild;
	className?: string;
	radius?: number;
	size?: 'small' | 'medium' | 'big';
	look?: 'primary' | 'secondary' | 'dark' | 'light';
}

const sizes = {
	small: css`
		padding: 5px 20px;
		font-size: 12px;
	`,
	medium: css`
		padding: 10px 30px;
		font-size: 14px;
	`,
	big: css`
		padding: 15px 40px;
		font-size: 18px;
	`,
};

const looks = {
	primary: css`
		border: 1px solid tomato;
		background: tomato;
		color: white;
	`,
	secondary: css`
		border: 1px solid palevioletred;
		background: palevioletred;
		color: white;
	`,
	dark: css`
		border: 1px solid #273444;
		background: #273444;
		color: white;
	`,
	light: css`
		border: 1px solid #eff2f7;
		background: #f9fafc;
		color: #273444;
	`,
};

const Button = styled('button')<ButtonProps>`
	${({ size = 'small' }) => sizes[size]};
	${({ look = 'primary' }) => looks[look]};

	outline: none;
	border-radius: ${({ radius = 5 }) => radius}px;
`;
Button.displayName = 'Button';

export default Button;
