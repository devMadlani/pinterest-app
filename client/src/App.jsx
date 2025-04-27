import { Route, Routes } from "react-router";
import "./App.css";
import Gallery from "./components/Gallery";
import Leftbar from "./components/Leftbar";
import Topbar from "./components/Topbar";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UserProfilepage from "./pages/UserProfilepage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/create" element={<HomePage />} />
        <Route path="/pin/:id" element={<PostPage />} />
        <Route path="/:username" element={<UserProfilepage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
}

export default App;
