import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './index';

storiesOf('Button', module)
	.addWithJSX('General', () => <Button>Click Me</Button>)
	.addWithJSX('Secondary Medium', () => (
		<Button look="secondary" size="medium">
			Click Me
		</Button>
	))
	.addWithJSX('Dark Medium', () => (
		<Button look="dark" size="medium">
			Click Me
		</Button>
	))
	.addWithJSX('Light Big With Radius', () => (
		<Button look="light" size="big" radius={100}>
			Click Me
		</Button>
	));
