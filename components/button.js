import styled from 'styled-components';

export default styled.button`
  display: inline-block;
  padding: 1em 2em;
  border: 0.16em solid ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.main};
  border-radius: 2em;
  text-decoration: none;
  font-weight: 600;
  color: ${(props) => props.theme.light};
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  font-size: 1.1em;
  padding: margin;

  &:hover {
    background-color: ${(props) => props.theme.highLight};
  }

  @media all and (max-width: 30em) {
    a.button3 {
      display: block;
    }
  }
`;
