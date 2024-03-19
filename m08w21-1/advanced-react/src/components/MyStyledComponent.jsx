import styled from 'styled-components';
import Custom from './Custom';

const H2 = styled.h2`
  color: purple;
  font-size: 24px;
`;

const P = styled.p`
  color: ${({color}) => color ? color : 'grey'};
  text-decoration: ${props => props.underline ? 'underline' : 'none'};
`;

const Wrapper = styled(Custom)`
  color: firebrick;
`;

const MyStyledComponent = () => {
  return (
    <div>
      <h2>MyStyledComponent</h2>
      {/* <H2>Do I look good??</H2>
      <P color="yellow">This is a paragragh tag</P>
      <P color="green" underline>This is a paragragh tag</P>
      <P underline>This is a paragragh tag</P> */}

      <Custom />
      <Wrapper />
    </div>
  );
};

export default MyStyledComponent;
