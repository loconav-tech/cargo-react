import styled from 'styled-components';
import { variant } from 'styled-system';

// interface HeadingProps = {
// 	children?: React.ReactChild;
//   type: string;
// }
type Prop<T> = T | null;

type Variants = 'bordered' | 'underlined';

type TypeProps = {
  type?: Prop<Variants>;
};

const headingVariants = variant({
  // theme key for variant definitions
  scale: 'headingStyles',
  // component prop
  prop: 'type'
});

const Heading = styled('h1')<TypeProps>(headingVariants);

Heading.displayName = 'Heading';

export default Heading;