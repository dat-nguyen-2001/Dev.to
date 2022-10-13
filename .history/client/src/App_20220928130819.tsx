import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import AboutPage from './pages/about';
import SignIn from './pages/enter';
import HomePage from './pages/home';
import New from './pages/new';
import User from './pages/user';

function App() {
  return (<Router>
    <Routes>
    <Route path='/' element={< HomePage />}></Route>
      <Route path='/about' element={< AboutPage />}></Route>
      <Route path='/enter' element={< SignIn />}></Route>
      <Route path='/new' element={< New />}></Route>
      <Route path='/:username' element={< User />}></Route>
    </Routes>
  </Router>

  );
}

export default App;
