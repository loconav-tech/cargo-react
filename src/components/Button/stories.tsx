import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./index";

storiesOf("Button", module)
  .add("General", () => (
    <Button>Click Me</Button>
  ))
  .add("Secondary Medium", () => (
    <Button look="secondary" size="medium">
      Click Me
    </Button>
	))
	.add("Dark Medium", () => (
    <Button look="dark" size="medium">
      Click Me
    </Button>
	))
	.add("Light Big With Radius", () => (
    <Button look="light" size="big" radius={100}>
      Click Me
    </Button>
	));
