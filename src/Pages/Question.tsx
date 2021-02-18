import React from "react";
import {
  useParams,
  // useLocation,
  // Link,
  useHistory,
  // Route,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { UpdateQuestion } from "../Redux/QuestionsDuck";
// import queryString from 'query-string'
import ResponsiveForm from "../Components/ResponsiveForm";
import "./sass/Question.sass";
import Button from "../Components/Button";
const Home = () => {
  let RouteParams: any = useParams();
  const CurrentQuestionNumber = parseInt(RouteParams.index);
  const CurrentQuestionIndex = CurrentQuestionNumber - 1;
  const dispatch = useDispatch();
  const history = useHistory();
  console.log(history);
  const StoreQuestions = useSelector((state: any) => state.questionState);
  console.log(StoreQuestions);
  // console.log(CurrentQuestionParameter);

  // let CurrentQuestionStore = StoreQuestions.findIndex((question) => {
  //   return question.answer;
  // });
  // if (CurrentQuestionStore === -1) {
  //   console.log("No comenzo", CurrentQuestionStore);
  // } else {
  //   console.log("Pregunta actual", CurrentQuestionStore + 1);
  // }

  // useEffect(() => {
  //   console.log(StoreQuestions);
  // }, [StoreQuestions]);

  // console.log(StoreQuestions[CurrentQuestionParameter - 1]);
  let CurrentQuestion = StoreQuestions[CurrentQuestionIndex];
  console.log(
    CurrentQuestionNumber,
    CurrentQuestionNumber.toString(),
    "/Question/" + (CurrentQuestionNumber + 1).toString()
  );

  const saveAnswer = (value) => {
    dispatch(UpdateQuestion(CurrentQuestionIndex, value));
    history.push(
      StoreQuestions.length === CurrentQuestionNumber
        ? "/End"
        : "/Question/" + (CurrentQuestionNumber + 1).toString()
    );
  };

  return (
    <ResponsiveForm>
      <div className="ContainerQuestion">
        <div className="Area">
          <h3>{CurrentQuestion.category}</h3>
        </div>
        <div className="Question">
          <h3>{CurrentQuestion.question}</h3>
          <div className="Question__Buttons">
            <Button onClick={() => saveAnswer(true)} text="true" />
            <Button onClick={() => saveAnswer(false)} text="false" />
          </div>
        </div>
        <div className="Pages">
          {CurrentQuestionNumber} of {StoreQuestions.length}
        </div>
      </div>
    </ResponsiveForm>
  );
};
export default Home;
