import { BaseLayout } from "./BaseLayout";

import { Content } from "../shared/Content";
import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import { Header } from "../shared/Header";

import { authLinks } from "../../constants/links";

import { Outlet, useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { getItem } from "../../services/storage.service";

import { Constants } from "../../constants/localStorage";

const AuthLayout = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const jwtToken = getItem(Constants.JWT_TOKEN);
  //   console.log("jwtToken:", jwtToken);

  //   if (jwtToken) navigate("/");
  // }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt-token");
    console.log("jwtToken:", jwtToken);

    if (jwtToken) navigate("/");
  }, []);

  return (
    <BaseLayout>
      <Header
        title="Auth layout header"
        navbar={<Navbar links={authLinks} />}
      />
      <Content>
        <p>Welcome on the authentication layout.</p>
        <p>Please authenticate to access the dashboard layout.</p>
        <Outlet />
      </Content>
      <Footer />
    </BaseLayout>
  );
};

export { AuthLayout };
