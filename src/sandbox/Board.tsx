import styled from "styled-components";
import Input from "./Input";
import Second from "./Second";

const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Wrapper = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 200px;
`;

const Board = () => {
  return (
    <Block>
      <Wrapper>
        <Input />
        <Second />
      </Wrapper>
    </Block>
  );
};

export default Board;
