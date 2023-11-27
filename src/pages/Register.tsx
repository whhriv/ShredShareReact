import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Body from '../components/Body';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../contexts/ApiProvider';

export default function Register() {
  const [formErrors, setFormErrors] = useState({});
 
  // const firstNameField = useRef();
  // const lastNameField = useRef();
  const usernameField = useRef();
  const emailField = useRef();
  const locationField = useRef();
  const passwordField = useRef();
  const password2Field = useRef();
  const navigate = useNavigate();
  const api = useApi();

  useEffect(() => {
    usernameField.current.focus();
  }, []);

    const onSubmit = async (event) => {
    event.preventDefault();
    if (passwordField.current.value !== password2Field.current.value) {
      setFormErrors({password2: "Passwords don't match"});
    }
    else {
      console.log('I am here in the await')
      const data = await api.post('/users', {
        
        username: usernameField.current.value,
        email: emailField.current.value,
        location: locationField.current.value,
        password: passwordField.current.value
      });
      if (!data.ok) {
        setFormErrors(data.body.errors.json);
        console.log('I am here SETFORMERRORS')
      }
      else {
        setFormErrors({});
        navigate('/login');
        console.log('I am here in the else trying to navigate')
      }
    }
  };

  return (
    <Body>
      <h1>Register</h1>
      <Form onSubmit={onSubmit}>

        <InputField
          name="username" label="Username"
          error={formErrors.username} fieldRef={usernameField} />
        <InputField
          name="email" label="Email address"
          error={formErrors.email} fieldRef={emailField} />
          <InputField
          name="locationField" label="Location"
          error={formErrors.locationField} fieldRef={locationField} />
        <InputField
          name="password" label="Password" type="password"
          error={formErrors.password} fieldRef={passwordField} />
        <InputField
          name="password2" label="Re-Enter Password" type="password"
          error={formErrors.password2} fieldRef={password2Field} />
        <Button variant="primary" type="submit">Register</Button>
      </Form>
    </Body>
  );
}
{/* <InputField
name="firstName" label="First Name"
error={formErrors.firstName} fieldRef={firstNameField} />
<InputField
name="lastName" label="Last Name"
error={formErrors.lastName} fieldRef={lastNameField} /> */}