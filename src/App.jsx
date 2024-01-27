import { Route, Routes } from "react-router-dom";
import { Login, NotFound, SignUp, User } from "./pages";

function App() {
  return (
    <>
      {/* IMPORT THE PAGES AND ROUTES HERE. THE ROUTES ARE IMPORTED FROM THE ROUTES.JSX FILE. THE PAGES ARE IMPORTED FROM THE PAGES.JSX FILE. THE ROUTES AND PAGES ARE USED TO CREATE THE NAVIGATION. THE ROUTES ARE USED TO CREATE THE LINKS, ITS SO STRAIGHT FORWARD. */}
      <Routes>
        <Route path="/" index element={<User />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
