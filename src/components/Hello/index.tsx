/**
 * @class HelloComponent
 */

import * as React from "react";

export type Props = { text: string };

export default class HelloComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div style={{ color: "red" }}>Hello {text}</div>;
  }
}
