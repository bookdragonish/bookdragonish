import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar /> <Outlet /> <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/experience/:id" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
