test('', () => {
	const component = renderer.create(<Button>Click Me</Button>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
test('Component should match with general component', () => {
	const component = renderer.create(<Button>Click Me</Button>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
test('Component should match with general component', () => {
	const component = renderer.create(<Button>Click Me</Button>);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});