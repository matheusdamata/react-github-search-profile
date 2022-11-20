import styled from 'styled-components'

export const Container = styled.main`
  max-width: 47rem;
  min-height: 100vh;
  height: auto;

  padding: 2.5rem;
  margin: auto;

  display: flex;
  flex-direction: column;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  position: relative;

  margin: 2rem 0 1rem;

  svg {
    position: absolute;
    margin-left: 1rem;

    color: ${(props) => props.theme['base-button']};
  }

  input {
    width: 100%;
    height: 55px;

    border: 0;
    border-radius: 12px;

    padding: 0 7rem 0 3.5rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['base-card']};

    &::placeholder {
      color: ${(props) => props.theme.white};
    }
  }

  button {
    position: absolute;

    border: 0;
    border-radius: 12px;

    padding: 0.75rem 1rem;
    margin-left: 36rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['base-button']};
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;

  border-radius: 12px;

  padding: 2rem 3rem;

  animation: animatetop 2s;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 95px;
    height: 95px;

    border-radius: 50%;
  }

  @keyframes animatetop {
    from {
      bottom: -300px;
      opacity: 0;
    }
    to {
      bottom: 0;
      opacity: 1;
    }
  }
`
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-left: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-button']};
  }
`
export const RighSideInfoUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
  }

  span {
    font-size: 0.75rem;
  }
`

export const RighSideBioUser = styled.span`
  margin-top: 1rem;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
`

export const RighSideInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-around;

  width: 100%;

  border-radius: 12px;
  gap: 1rem;

  margin-top: 2rem;
  padding: 1rem;

  background: ${(props) => props.theme.background};
`

export const RighSideInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  span {
    font-size: 0.75rem;
  }
`

export const RightSideFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  margin-top: 2rem;

  font-size: 0.75rem;
`

interface RightSideFooterInfoProps {
  variant?: 'gray'
}

export const RightSideFooterInfo = styled.div<RightSideFooterInfoProps>`
  display: flex;
  align-items: center;

  color: ${(props) =>
    props.variant === 'gray' ? props.theme['base-text'] : props.theme.white};

  svg {
    margin-right: 1rem;
    color: ${(props) =>
      props.variant === 'gray' ? props.theme['base-text'] : props.theme.white};
  }
`
