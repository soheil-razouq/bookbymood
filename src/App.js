import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from './Comp/BookList/BookList';
import Home from './Comp/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/BookList/:label" element={<BookList></BookList>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
