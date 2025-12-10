
import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function Layout() {
  return (<><Navbar/> <Outlet /></>);
}

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="/project/:id" element={<ProjectPage/>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
