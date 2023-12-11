import styled from 'styled-components';
import landingImg1 from '../assets/img_01.png';
import landingImg2 from '../assets/landingimg2.png';

const TYPE = {
  left: {
    padding: '6rem 0 6rem 6rem',
    gap: '15.2rem',
    margin: '6rem auto 3rem',
    direction: 'column',
    justifyContent: 'flex-start',
  },
};

const Article = styled.article`
  display: flex;
  margin: ${({ type }) => (type ? TYPE[type].margin : '3rem auto')};
  border-radius: 1.6rem;
  background: var(--Surface, #f6f8ff);
  width: 120rem;

  padding: ${({ type }) => (type ? TYPE[type].padding : '6rem 19.2rem 6rem 0')};
  gap: ${({ type }) => (type ? TYPE[type].gap : '0')};

  > section {
    width: 72rem;
    height: 20.4rem;
    flex-shrink: 0;

    > img {
      width: 100%;
    }
  }

  @media screen and (max-width: 1247px) {
    flex-direction: ${({ type }) =>
      type ? TYPE[type].direction : 'column-reverse'};
    justify-content: ${({ type }) =>
      type ? TYPE[type].justifyContent : 'flex-end'};
    margin: 4.9rem 0 3rem;
    padding: 4rem;
    gap: 0;
    width: 100%;

    > section {
      margin: 0 auto;
      width: 72rem;
      height: 20.4rem;
      flex-shrink: 0;

      > img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    gap: 5rem;
    padding: 4.2rem;

    > section {
      width: 100%;
      height: 20.4rem;
      flex-shrink: 0;
      overflow: hidden;
    }
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.8rem;

  > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    letter-spacing: -0.024rem;
  }

  > p {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 2.8rem;
    letter-spacing: -0.018rem;
    color: var(--gray-500, #555);
  }

  @media screen and(max-width: 1248px) {
    padding: 4rem;
  }
`;

const Point = styled.span`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  align-items: center;
  color: var(--white, #fff);
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: -0.007rem;
  border-radius: 5rem;
  background: var(--purple-600, #9935ff);
`;

function LandingMain() {
  return (
    <main>
      <Article type="left">
        <TextBox>
          <Point>point. 01</Point>
          <h1>누구나 손쉽게, 온라인 롤링 페이퍼를 만들 수 있어요</h1>
          <p>로그인 없이 자유롭게 만들어요.</p>
        </TextBox>
        <section>
          <img src={landingImg1} alt="롤링 페이퍼 예시" />
        </section>
      </Article>
      <Article>
        <section>
          <img src={landingImg2} alt="롤링 페이퍼 예시" />
        </section>
        <TextBox>
          <Point>point. 02</Point>
          <h1>서로에게 이모지로 감정을 표현해보세요</h1>
          <p>롤링 페이퍼에 이모지를 추가할 수 있어요.</p>
        </TextBox>
      </Article>
    </main>
  );
}

export default LandingMain;
