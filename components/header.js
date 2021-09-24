import styled from 'styled-components';

export default styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.main};
  height: 60px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:10px;
`;
