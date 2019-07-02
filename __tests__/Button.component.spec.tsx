import * as React from "react";
import Button from "../src/components/Button/index";
import * as renderer from "react-test-renderer";

test("Component should match with general component", () => {
  const component = renderer.create(<Button>Click Me</Button>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Component should match with Secondary Medium", () => {
  const component = renderer.create(
		<Button look="secondary" size="medium">
		Click Me
		</Button>
	);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("Component should match with Dark Medium", () => {
  const component = renderer.create(
		<Button look="dark" size="medium">
		Click Me
		</Button>
	);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Component should match with Look light size Big and Radius", () => {
  const component = renderer.create(
		<Button look="light" size="big" radius={100}>
		Click Me
		</Button>
	);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
