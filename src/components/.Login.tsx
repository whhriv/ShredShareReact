// import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserType from '../types/auth'
// import { login } from '../lib/apiWrapper'


type LoginProps = {
    
    isLoggedIn: boolean,
    logUserIn: (user:Partial<UserType>) => void

}

export default function Login({ isLoggedIn, logUserIn}: LoginProps) {
    
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn){
            navigate('/')
        }
    })


    const [userFormData, setUserFormData] = useState<Partial<UserType>>({email:'', password:''})



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({...userFormData, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
        try {
          //   // Using Axios for the login request
          //   const response = await axios.get('https://cae-bookstore.herokuapp.com/login', {
          //     headers: {
          //       Authorization: `Basic ` + btoa(`${userFormData.email}:${userFormData.password}`),
          //     },
          //   });
      
          //   console.log(JSON.stringify(response.data));
      
          //  localStorage.setItem('token',response.data?.token as string)
          //   logUserIn(userFormData);
          //   navigate('/AllQuestions');
          // } catch (error) {
          //   console.error(error);

          }}

    

  return (
    <>
    <h1 className="text-center">Login</h1>
    <Card className="mt-3">
        <Card.Body>
            <Form onSubmit={handleFormSubmit}>
               
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control value={userFormData.email} name='email' onChange={handleInputChange}/>

                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control value={userFormData.password} name='password' type='password' onChange={handleInputChange}/>

                
                <Button type='submit' variant='outline-success' className='w-100 mt-3' >Login</Button>
            </Form>
        </Card.Body>
    </Card>

</>
  )
  }