import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  width: 30%;
  flex-direction: column;
  background-color: rgb(26, 111, 190);

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  @media screen and (max-width: 750px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    color: white;

    @media screen and (max-width: 750px) {
      font-size: 14px;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyled>
      <NavList>
        <NavItem>
          <Link to='/'>Home</Link>
        </NavItem>
        <NavItem>
          <Link to='/about'>About</Link>
        </NavItem>
        <NavItem>
          <Link to='/education'>Education</Link>
        </NavItem>
        <NavItem>
          <Link to='/experience'>Experience</Link>
        </NavItem>
        <NavItem>
          <Link to='/project'>Project</Link>
        </NavItem>
        <NavItem>
          <Link to='/calculator'>Calculator</Link>
        </NavItem>
      </NavList>
    </NavStyled>
  );
}
