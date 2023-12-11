import NavBar from '../components/NavBar';
import styled from 'styled-components';
import PrimaryButton from '../components/PrimaryButton';

const Footer = styled.footer`
  width: 100%;
  height: 10.4rem;
  padding: 2.4rem 2.4rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
import LandingMain from '../components/LandingMain';

function LandingPage() {
  return (
    <>
      <NavBar />
      <main></main>
      <Footer>
        <PrimaryButton size="regular">구경 해보기</PrimaryButton>
      </Footer>
    </>
  );
}

export default LandingPage;
