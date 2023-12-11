import styled from 'styled-components';
import LogoImg from '../assets/logo.svg';
import OutlinedButton from './OutlinedButton';
import { Link } from 'react-router-dom';
const Nav = styled.nav`
  height: 6.4rem;
  width: 100%;

  border-bottom: 1px solid #ededed;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    > div {
      padding: 1.2rem 2rem;
    }
  }

  @media screen and (min-width: 768px) {
    > div {
      padding: 1.1rem 2.4rem;
    }
  }

  @media screen and (min-width: 1248px) {
    > div {
      padding: 1.1rem 0rem;
      max-width: 120.7rem;
    }
  }
`;

function NavBar({ className }) {
  return (
    <Nav className={className}>
      <div>
        <Link to="/">
          <img src={LogoImg} alt="로고" />
        </Link>
        <Link to="/post">
          <OutlinedButton size="md">롤링 페이퍼 만들기</OutlinedButton>
        </Link>
      </div>
    </Nav>
  );
}

export default NavBar;
