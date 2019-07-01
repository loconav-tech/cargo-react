import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Hello from './index';

const stories = storiesOf('Hello', module);

stories.add(
	'Hello with World',
	() => <Hello text="World" />,
	{}
);
