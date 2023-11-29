import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Body from '../components/Body';
import InputField from '../components/InputField';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [formErrors, setFormErrors] = useState({});
  const usernameField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const validateForm = () => {
    const errors: Record<string, string> = {};
    const username = usernameField.current?.value;
    const password = passwordField.current?.value;

    if (!username) {
      errors.username = 'Username must not be empty.';
    }
    if (!password) {
      errors.password = 'Password must not be empty.';
    }

    return errors;
  };

  useEffect(() => {
    usernameField.current?.focus();
  }, []);

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const username = usernameField.current?.value;
        const password = passwordField.current?.value;

        console.log('Sending request with username:', username, 'and password:', password);


  //       const loginResponse = await fetch('http://127.0.0.1:5000/api/login', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ username, password }),
  //       });

  //       if (!loginResponse.ok) {
  //         const responseBodyText = await loginResponse.text();
  //         console.error('Login failed:', responseBodyText);
  //         alert('Login failed - check credentials');
  //         return;
  //       }

  //       // Assuming your server responds with a JSON object containing a token
  //       const loginResponseBody = await loginResponse.json();
  //       const token = loginResponseBody.token;

  //       // If login is successful, make a GET request to get the token
  //       const tokenResponse = await fetch('http://127.0.0.1:5000/api/token', {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${token}`, // Use the token obtained from the login response
  //         },
  //       });

  //       if (tokenResponse.ok) {
  //         const tokenResponseBody = await tokenResponse.json();
  //         console.log('Token:', tokenResponseBody.token);
  //         // Handle the obtained token as needed
  //       } else {
  //         const tokenResponseBodyText = await tokenResponse.text();
  //         console.error('Failed to get token:', tokenResponseBodyText);
  //       }
  //     } catch (error) {
  //       console.error('Error during login:', error);
  //     }
  //   }
  // };

        const response = await fetch('http://127.0.0.1:5000/api/login', {
          method: 'POST', //GET request for token with username/password
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        console.log('Received response:', response);

        if (response.ok) {
          navigate('/skis');
          const responseBody = await response.json();
          console.log('Login successful!!! YAY', responseBody);
        } else {
          const responseBodyText = await response.text();
          console.error('Login failed: response text', responseBodyText.message);
          alert('login failed - check credentials')
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  };

  return (
    <Body>
      <h1>Login</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="username"
          label="Username or email address"
          error={formErrors.username}
          fieldRef={usernameField}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          error={formErrors.password}
          fieldRef={passwordField}
        />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Body>
  );
}



