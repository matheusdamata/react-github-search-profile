import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    font-size: 1.25rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;

    color: ${(props) => props.theme.white};
    background: transparent;

    & svg {
      margin-left: 0.5rem;
    }
  }
`
