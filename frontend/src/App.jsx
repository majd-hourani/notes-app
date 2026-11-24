import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// In React Router v5, exact told the router to match the path only when the URL is exactly /dashboard, not when it merely starts with it. Without it, /dashboard/settings or /dashboard/anything would also match that route.

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Signup />} />
    </Routes>
  </Router>
);
const App = () => {
  return <div>{routes}</div>;
};

export default App;
