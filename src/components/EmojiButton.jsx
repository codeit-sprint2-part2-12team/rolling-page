import styled from 'styled-components';
import Add24 from '../assets/add-24.svg';
import WhiteAdd24 from '../assets/add-24-white.svg';
const SIZES = {
  md: {
    padding: `0.8rem 1.6rem`,
    fontSize: '1.6rem',
    fontWeight: '400',
    lineHeight: '2.6rem',
    letterSpacing: '-0.016rem',
    borderRadius: '0.6rem',
    height: '4rem',
    width: '9rem',
    gap: '1rem',
    iconSize: '2.4rem',
  },
  sm: {
    padding: `0.6rem 1.6rem`,
    fontSize: '1.6rem',
    fontWeight: '500',
    lineHeight: '2.4rem',
    letterSpacing: 'normal',
    borderRadius: '0.6rem',
    height: '3.6rem',
    width: '9rem',
    gap: '0.4rem',
    iconSize: '2.4rem',
  },
  xs: {
    padding: `0.2rem 1.6rem`,
    fontSize: '1.4rem',
    fontWeight: '400',
    lineHeight: '2rem',
    letterSpacing: '-0.007rem',
    borderRadius: '0.6rem',
    height: '2.8rem',
    width: '9rem',
    gap: '0.4rem',
    iconSize: '2rem',
  },
};

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: 1px solid var(--gray-300, #ccc);
  background: var(--white, #fff);
  color: var(--gray-900, #181818);
  text-align: center;

  border-radius: ${({ size }) => (size ? SIZES[size].borderRadius : `auto`)};
  padding: ${({ size }) => (size ? SIZES[size].padding : `auto`)};
  font-size: ${({ size }) => (size ? SIZES[size].fontSize : `auto`)};
  font-weight: ${({ size }) => (size ? SIZES[size].fontWeight : `auto`)};
  line-height: ${({ size }) => (size ? SIZES[size].lineHeight : `auto`)};
  letter-spacing: ${({ size }) => (size ? SIZES[size].letterSpacing : `auto`)};

  > div {
    display: flex;
    align-items: center;
    gap: ${({ size }) => (size ? SIZES[size].gap : `auto`)};
  }

  > div > img {
    width: ${({ size }) => (size ? SIZES[size].iconSize : `auto`)};
    height: ${({ size }) => (size ? SIZES[size].iconSize : `auto`)};
  }

  &:hover {
    border: 1px solid var(--gray-300, #ccc);
    background: var(--gray-100, #f6f6f6);
  }
  &:focus {
    border: 1px solid var(--gray-500, #555);
    background: var(--white, #fff);
  }
  &:active {
    border: 1px solid var(--gray-300, #ccc);
    background: var(--gray-100, #f6f6f6);
  }
  &:disabled {
    border: 1px solid var(--gray-300, #ccc);
    background: var(--gray-300, #ccc);
    > div {
      color: var(--white, #fff);
    }
  }
`;

function EmojiButton({ className, size, children, disabled, onClick }) {
  return (
    <Button
      className={className}
      size={size}
      disabled={disabled}
      onClick={onClick}>
      <div>
        <img src={disabled ? WhiteAdd24 : Add24} alt="추가" />
        <div>{children}</div>
      </div>
    </Button>
  );
}

export default EmojiButton;
