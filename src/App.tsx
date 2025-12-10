
import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import ToggleThemeButton from "./components/ToggleThemeButton";

function Layout() {
  return <Outlet />;
}

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<><h1>HelloWorld</h1><ToggleThemeButton/></>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
