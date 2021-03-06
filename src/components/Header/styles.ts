import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #cd5c5c;
  border-radius: 5px;
  padding: 30px 0;
  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        transition: opacity 0.2s;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
