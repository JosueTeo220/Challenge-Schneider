import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<LoginPage></LoginPage>}></Route>
        <Route path='/ecohome' element={<></>}></Route>
        <Route path='/sobre' element={<></>}></Route>
        <Route path='/loja' element={<></>}></Route>
        <Route path='/dicas' element={<></>}></Route>
        <Route path='/social' element={<></>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
