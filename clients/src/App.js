import "./App.css";
import ChatRoom from "./pages/chatRoom";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatRoom></ChatRoom>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
}

export default App;
