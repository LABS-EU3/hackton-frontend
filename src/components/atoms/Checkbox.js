import styled from "styled-components";

const Checkbox = styled.input.attrs(props => ({
  type: "checkbox",
  name: props.name,
  id: props.name
}))`

  width: 20px;
  height: 20px;
  margin: 0 20px 10px 0;
`;

export default Checkbox;