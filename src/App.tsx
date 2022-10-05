import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "./atom";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  background-color: skyblue;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  background-color: blue;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px;
  padding-top: 30px;
  background-color: pink;
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  background-color: teal;
  padding: 10px 10px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      // 1) Delete item on souce.index
      console.log("Delete item on", source.index);
      console.log(toDosCopy);
      toDosCopy.splice(source.index, 1);
      console.log("Deleted Item");
      console.log(toDosCopy);
      // 2) Put back the item on the destination.index
      console.log("Put Back", draggableId, "on ", destination.index);
      toDosCopy.splice(destination?.index, 0, draggableId);
      return toDosCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable key={toDo} draggableId={toDo} index={index}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.draggableProps}
                        {...magic.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
                {magic.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
