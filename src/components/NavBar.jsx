import styled from 'styled-components';
import LogoImg from '../assets/logo.svg';
import OutlinedButton from './OutlinedButton';
import { Link } from 'react-router-dom';
const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid #ededed;
  align-items: center;
  

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 1.1rem auto;
  }

  
  @media screen and (max-width: 1247px) {
    > div {
      padding: 0 2.4rem;

    }
  }
    @media screen and (max-width: 767px) {
      > div {
        padding:0 2.4rem;
      }
    }
  @media screen and (max-width: 374px) {
    > div {
      padding: 0 2rem;
    }
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
