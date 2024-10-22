import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const NavStyled = styled.nav`
  display: flex;
  width: 30%;
  flex-direction: column;
  background-color: rgb(26, 111, 190);

  @media (max-width: 750px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 90%;

  @media (max-width: 750px) {
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  @media (max-width: 750px) {
    font-size: 14px;
  }
`;

export default function Nav() {
  return (
    <NavStyled>
      <NavList>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/education'>Education</NavLink>
        </li>
        <li>
          <NavLink to='/experience'>Experience</NavLink>
        </li>
        <li>
          <NavLink to='/project'>Project</NavLink>
        </li>
        <li>
          <NavLink to='/calculator'>Calculator</NavLink>
        </li>
      </NavList>
    </NavStyled>
  );
}
