import './App.css';
import { Route, Routes } from 'react-router-dom';

import About from './about/About';
import Home from './home/Home';
import User from './user/User';
import Repos from './repos/Repos';
import NotFound from './PageNotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/users/:name/repos' element={<Repos />} />
      <Route path='/users/:name' element={<User />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
