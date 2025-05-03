import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UserProfilepage from "./pages/UserProfilepage";
import PostPage from "./pages/PostPage";
import AuthPage from "./pages/AuthPage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/pin/:id" element={<PostPage />} />
        <Route path="/:username" element={<UserProfilepage />} />
        <Route path="/search" element={<SearchPage />} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
