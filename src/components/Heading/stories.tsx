import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Heading from './index';
import { CargoProvider } from './../../cargo-provider';

storiesOf('Heading', module)
	.addWithJSX('Heading - Bordered', () => ( 
		<CargoProvider>
			<Heading type="bordered">Bordered heading</Heading>
		</CargoProvider>
	))
	.addWithJSX('Heading - Underlined', () => (
		<CargoProvider>
			<Heading type="underlined">Underlined heading</Heading>
		</CargoProvider>
	));
