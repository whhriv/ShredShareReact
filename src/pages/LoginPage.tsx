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

        const response = await fetch('http://127.0.0.1:5000/api/users', {
          method: 'POST',
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
          const responseBody = await response.json();
          console.error('Login failed:', responseBody.message);
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



// import { useState, useEffect, useRef } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Body from '../components/Body';
// import InputField from '../components/InputField';
// import { useNavigate } from 'react-router-dom';


// export default function LoginPage() {
//   const [formErrors, setFormErrors] = useState({});
//   const usernameField = useRef();
//   const passwordField = useRef();
//   const navigate = useNavigate();

//   const validateForm = () => {
//     const errors = {};
//     const username = usernameField.current.value;
//     const password = passwordField.current.value;

//     if (!username) {
//       errors.username = 'Username must not be empty.';
//     }
//     if (!password) {
//       errors.password = 'Password must not be empty.';
//     }

//     return errors;
//   };

//   useEffect(() => {
//     usernameField.current.focus();
//   }, []);

//   const onSubmit = async (ev) => {
//     ev.preventDefault();

//     const errors = validateForm();
//     setFormErrors(errors);

//     if (Object.keys(errors).length === 0) {
//       try {
//         const username = usernameField.current.value;
//         const password = passwordField.current.value;

//         const response = await fetch('http://127.0.0.1:5000/api/users', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ username:username, password:password }),
//         });

//         if (response.ok) {
//           navigate('/skis')
//           const responseBody = await response.json();
//           console.log('Login successful!!! YAY', responseBody);
//         } else {
  
//           const responseBody = await response.json();
//           console.error('Login failed:', responseBody.message);
//         }
//       } catch (error) {
//         console.error('Error during login:', error);
//       }
//     }
//   };



//   //   // TODO: log the user in


//   return (
//     <Body>
//       <h1>Login</h1>
//       <Form onSubmit={onSubmit}>
//         <InputField
//           name="username" label="Username or email address"
//           error={formErrors.username} fieldRef={usernameField} />
//         <InputField
//           name="password" label="Password" type="password"
//           error={formErrors.password} fieldRef={passwordField} />
//         <Button variant="primary" type="submit">Login</Button>
//       </Form>
      
//     </Body>
//   );
// }
