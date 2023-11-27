import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
// import { getAllQuestions} from '../lib/apiWrapper'


type QuestionType = {
    answer: string,
    author: string,
    created_on: string,
    id: number,
    question: string
}


type Props = {
    question: QuestionType
}

export default function QuestionCard({ question }: Props) {
    // const [showAnswer, setShowAnswer] = useState(false);
    const [guess, setGuess] = useState('')
    const [correct, setCorrect] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGuess(e.target.value) 
    }
    const handleFormSubmit = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFormSubmitted(true)
        if (guess.toLowerCase() == question.answer.toLowerCase()) {
            setCorrect(true)
        } else {
            setCorrect(false)
        }
    }

  return (
    <Card className='my-3'>
        <Card.Body>
             <Card.Title>{question.question} AUTHOR: {question.author}</Card.Title>
             </Card.Body></Card>)}