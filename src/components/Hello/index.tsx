/**
 * @class HelloComponent
 */

import * as React from 'react';

export interface Props {
	text: string;
}

export default class Hello extends React.Component<Props> {
	render() {
		const { text } = this.props;

		return <div style={{ color: 'red' }}>Hello {text}</div>;
	}
}
