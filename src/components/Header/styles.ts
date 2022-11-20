import styled from 'styled-components'

type ContainerProps = {
  variant: 'dark' | 'light'
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: ${(props) =>
    props.variant === 'dark' ? props.theme.white : props.theme['base-card']};
  h1 {
    font-size: 1.25rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;

    color: ${(props) =>
      props.variant === 'dark' ? props.theme.white : props.theme['base-card']};
    background: transparent;

    & svg {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
    }
  }
`
