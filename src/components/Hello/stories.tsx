import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from './index';

const stories = storiesOf('Hello', module);

stories.addWithJSX('Hello with World', () => <Hello text="World" />, {});
