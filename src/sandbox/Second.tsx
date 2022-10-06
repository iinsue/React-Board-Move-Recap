import styled from "styled-components";

const StyledForm = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border-bottom: 0.125rem solid #000000;
  border-radius: 5px;
  background: none;
  font-size: 1.2em;
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
  font-size: 0.8rem;
  padding-bottom: 4px;
  transition: all 0.3s ease;
  background-color: #87ceeb;
  margin-left: 10px;
  margin-bottom: 2px;
`;

const Second = () => {
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
        <StyledSpan className="content-text">비밀번호</StyledSpan>
      </StyledLabel>
    </StyledForm>
  );
};

export default Second;
