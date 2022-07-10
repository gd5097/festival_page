import { MediaDiv, Main } from './styledComponent';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import { useState } from 'react';
import Header from './Header';
import Slogun from './Slogun';
import ShowPostList from './ShowPostList';
import Footer from './Footer';
import { Routes, Route,  useNavigate } from 'react-router-dom'
import ShowPost from './ShowPost';
import WritePost from './WritePost';
import Home from './Home';
import Food from './Food';
import Event from './Event';
import Lost from './Lost';

const API_URL = 'https://reactapitest.pythonanywhere.com/api/';
function App() {
    
      const [darkMode, setDarkMode] = useState(false);
      
      const navigate = useNavigate();
      return (
        <>
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <MediaDiv>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>
        <Main>
        <Slogun></Slogun>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/food" element={<Food></Food>}></Route>
          <Route path="/board" element={<ShowPostList apiUrl={API_URL}></ShowPostList>}></Route>
          <Route path="/board/write" element={<WritePost apiUrl={API_URL}></WritePost>}></Route>
          <Route path="/board/post/:postID" element={<ShowPost apiUrl={API_URL}></ShowPost>}></Route>
          <Route path="/event" element={<Event></Event>}></Route>
          <Route path="/lost" element={<Lost></Lost>}></Route>
        </Routes>
        </Main>
        <Footer></Footer>
        </MediaDiv>
      </ThemeProvider>
    </>
  );
}
export default App;