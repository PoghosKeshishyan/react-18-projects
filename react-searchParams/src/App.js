import { Route, Routes } from "react-router-dom";
import Post from "./Post";
import Posts from "./Posts";

function App() {

  
  return (
    <div className="App">

    <h1>useSearchParams</h1>

    <Routes>
     <Route path='/' element={<Posts/>} />
     <Route path='/post/:id' element={<Post />} />
     </Routes>
    </div>
  );
}

export default App;
