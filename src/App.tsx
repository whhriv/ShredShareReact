import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import FeedPage from './pages/FeedPage';
import ExplorePage from './pages/ExplorePage';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import Skis from './pages/skis'
import Surf from './pages/surf'
import Register from './pages/Register';
import ApiProvider from './contexts/ApiProvider';
import AlertMessage from './components/AlertMessage'
import CategoryType from './types/category';
import UserType from './types/auth';
import CreateSki from './pages/CreateSki';
import CreateSurf from './pages/CreateSurf';



export default function App() {

//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true: false);
//   const [loggedInUser, setLoggedInUser] = useState<Partial<UserType>|null>(null);
//   const [message, setMessage] = useState<string|null>(null);
//   const [category, setCategory] = useState<CategoryType|null>(null);

//   const flashMessage = (newMessage:string|null, newCategory:CategoryType|null):void => {
//     setMessage(newMessage);
//     setCategory(newCategory);
//   }
 
//   const logUserIn = (user:Partial<UserType>): void => {
//     setIsLoggedIn(true)
//     setLoggedInUser(user)
//     flashMessage(`${user.username} has been logged in`, 'success')
// // }

// const logUserOut = ():void => {
//   setIsLoggedIn(false)
//   setLoggedInUser(null)
//   flashMessage('You have logged out', 'info')
// }}


  
return (
    <Container fluid className="App bg-info shadow-1-strong">
      <BrowserRouter>
      <ApiProvider>
        <Navigation />
       
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/user/:username" element={<UserPage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/skis" element={<Skis />} />
          <Route path="/createski" element={<CreateSki />} />
          <Route path="/surf" element={<Surf />} />
          <Route path="/createsurf" element={<CreateSurf />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </ApiProvider>
      </BrowserRouter>
    </Container>
  );
}



// import Navigation from './components/Navigation'
// import { useState } from 'react'
// // import AllQuestions from './views/AllQuestions'
// import Container from 'react-bootstrap/Container'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from "./views/Home"
// import Register from './components/.Register'
// import Login from './components/Login'
// import UserType from './types/auth'
// // import AlertMessage from './components/AlertMessage'
// import CategoryType from './types/category'
// // import CreateQuestion from './components/CreateQuestion'
// import AllSkis from './views/AllSkis'
// import AllSurf from './views/AllSurf'


// type Props = {}

// export default function App({}: Props) {

//   const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') ? true: false);
//   const [loggedInUser, setLoggedInUser] = useState<Partial<UserType>|null>(null);
//   const [message, setMessage] = useState<string|null>(null);
//   const [category, setCategory] = useState<CategoryType|null>(null);

//   const logUserIn = (user:Partial<UserType>): void => {
//     setIsLoggedIn(true)
//     setLoggedInUser(user)
//     flashMessage(`${user.username} has been logged in`, 'success')
// }

// const logUserOut = ():void => {
//   setIsLoggedIn(false)
//   setLoggedInUser(null)
//   flashMessage('You have logged out', 'info')
// }




// const flashMessage = (newMessage:string|null, newCategory:CategoryType|null):void => {
//   setMessage(newMessage);
//   setCategory(newCategory);
// }


//     return (
//       <>
//       <BrowserRouter>
        
//         <Container data-bs-theme="dark">
//         <Navigation />
        
//           <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="Register" element={<Register />} />
//               <Route path="Login" element={<Login />} />
//               <Route path="ASkis" element={<AllSkis />} />
//               <Route path="Surf" element={<AllSurf />}/>
//           </Routes>
//           {/* <AllQuestions/> */}
//         </Container>
//       </BrowserRouter>

//       </>
//     )
//   }
//   // <Navigation isLoggedIn={isLoggedIn} handleLogOut={logUserOut}/>
//   // {message && category &&  <AlertMessage message={message} category={category!} flashMessage={flashMessage}/>}
//   //   <Routes>