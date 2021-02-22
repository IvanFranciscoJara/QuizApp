import React from 'react'
import Button from '../Components/Button'
import { IconQuizApp } from '../GlobalFiles/Icons'
import useFetch from '../GlobalFiles/useFetch'
import { useDispatch } from 'react-redux'
import { SaveQuestions } from '../Redux/QuestionsDuck'
import { useHistory } from 'react-router-dom'
import ResponsiveForm from '../Components/ResponsiveForm'
import './sass/Home.sass'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('hola')
  }

  const [response, responseGet] = useFetch('api.php?amount=10&difficulty=hard&type=boolean', {}, 'POST', () => {
    dispatch(SaveQuestions(response?.data?.results))
    history.push({
      pathname: '/Question/1',
    })
  })
  return (
    <ResponsiveForm onSubmit={HandleSubmit}>
      <div className="ContainerHome">
        <div className="Logo">
          <div className="Logo__image">
            <IconQuizApp />
          </div>
          <h1>QuizApp</h1>
        </div>
        <div className="welcome">
          <h2>Welcome</h2>
          <p>You will be presented with 10 True or False questions</p>
          <p className="question">Can you score 100%?</p>
        </div>
        <div className="button">
          <Button text="Begin" onClick={responseGet} loading={response.loading} />
        </div>
      </div>
    </ResponsiveForm>
  )
}
export default Home
