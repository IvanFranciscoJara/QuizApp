import { saveStorage, getStorage } from "./localStorageUtils";
import he from "he";
let initialData = [];

// let TOOGLE_LOADING_PAGE = 'TOOGLE_LOADING_PAGE'
// let TOOGLE_NAVBAR = 'TOOGLE_NAVBAR'
let SAVE_QUESTIONS = "SAVE_QUESTIONS";
let RESTORE_STORAGE_QUESTIONS = "RESTORE_STORAGE_QUESTIONS";
let UPDATE_QUESTION = "UPDATE_QUESTION";
let CLEAN_QUESTION = "CLEAN_QUESTION";
export default function reducer(state = initialData, action) {
  switch (action.type) {
    case SAVE_QUESTIONS:
      return action.payload;
    case RESTORE_STORAGE_QUESTIONS:
      return action.payload;
    case UPDATE_QUESTION:
      return action.payload;
    case CLEAN_QUESTION:
      return [];
    default:
      return state;
  }
}

export function SaveQuestions(value) {
  return (dispatch, getstore) => {
    let NewQuestions = value.map((question) => ({
      ...question,
      correct_answer: question.correct_answer === "True",
      question: he.decode(question.question),
      // .replace(/&apos;/g, "'")
      // .replace(/&quot;/g, '"')
      // .replace(/&gt;/g, ">")
      // .replace(/&lt;/g, "<")
      // .replace(/&amp;/g, "&")
      // .replace(/&#039;/g, "'"),
    }));
    saveStorage(NewQuestions);
    dispatch({ type: SAVE_QUESTIONS, payload: NewQuestions });
  };
}

export function UpdateQuestion(index, value) {
  return (dispatch, getstore) => {
    let newQuestions = [...getstore().questionState];
    newQuestions[index].answer = value;
    saveStorage(newQuestions);
    dispatch({ type: UPDATE_QUESTION, payload: newQuestions });
  };
}

export function CleanQuestions() {
  return (dispatch, getstore) => {
    saveStorage([]);
    dispatch({ type: CLEAN_QUESTION });
  };
}

export let restoreStorageQuestionDuck = () => (dispatch, getState?) => {
  let ReduxStore = getStorage();
  if (ReduxStore) {
    dispatch({
      type: RESTORE_STORAGE_QUESTIONS,
      payload: ReduxStore,
    });
  }
};
