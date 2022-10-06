import styled from "styled-components";

const StyledForm = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  border-bottom: 0.125rem solid #000000;
  background: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
  &:focus + .input-label .content-text,
  &:valid + .input-label .content-text {
    transform: translateY(-70%);
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: none;
`;
const StyledSpan = styled.span`
  position: absolute;
  bottom: 0px;
  left: 0px;
  padding-bottom: 4px;
  transition: all 0.3s ease;
`;

const Input = () => {
  return (
    <StyledForm>
      <StyledInput
        name="userId"
        id="inputs"
        type="text"
        autoComplete="off"
        required
      />
      <StyledLabel htmlFor="inputs" className="input-label">
        <StyledSpan className="content-text">아이디</StyledSpan>
      </StyledLabel>
    </StyledForm>
  );
};

export default Input;
