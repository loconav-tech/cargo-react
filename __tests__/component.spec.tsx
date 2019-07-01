import * as React from "react";
import Hello from "../src/index";
import * as renderer from "react-test-renderer";

test("Component should show 'red' text 'Hello World'", () => {
  const component = renderer.create(<Hello text="World" />);
  const testInstance = component.root;

  expect(testInstance.findByType(Hello).props.text).toBe("World");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
