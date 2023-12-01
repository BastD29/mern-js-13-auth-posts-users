import { Routes, Route } from "react-router";

import { AuthLayout } from "./components/layouts/AuthLayout";
import { DashboardLayout } from "./components/layouts/DashboardLayout";
import { PageLayout } from "./components/layouts/PageLayout";

import { Register } from "./components/features/Register";
import { Login } from "./components/features/Login";
import { Home } from "./components/features/Home";
import { About } from "./components/features/About";
import { Contact } from "./components/features/Contact";
import { Profile } from "./components/features/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
      </Route>

      <Route path="/" element={<DashboardLayout />}>
        <Route element={<PageLayout />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/about" element={<About />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route element={<PageLayout />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
