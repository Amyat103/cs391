import { styled } from 'styled-components';

const AboutContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align=item: center;
  background-color: lightpink;
`;

export default function AboutPage() {
  return (
    <AboutContentDiv>
      <h1>I am a CS 391 Instructor!</h1>
      <p>I love teaching this class because building web apps is so fun</p>
    </AboutContentDiv>
  );
}
