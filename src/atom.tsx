import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDO",
  default: {
    "To Do": ["a", "b"],
    doing: ["c", "d"],
    done: ["e", "f"],
    "Do Later": ["x", "z"],
  },
});
