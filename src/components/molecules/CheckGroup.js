import styled from "styled-components";

const CheckGroup = styled.div`
  width: ${props => props.short ? "120px" : "180px"};
  label {
    font-weight: normal;
  }
`;

export default CheckGroup;