import { homepageLinks } from "../../constants/links";

import { Navbar } from "../shared/Navbar";
import { Header } from "../shared/Header";

import { BaseLayout } from "./BaseLayout";
import { Content } from "../shared/Content";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { Constants } from "../../constants/localStorage";

import { useDispatch } from "react-redux";

import { getItem } from "../../services/storage.service";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const jwtToken = getItem(Constants.JWT_TOKEN);
  //   console.log("jwtToken:", jwtToken);

  //   if (jwtToken) dispatch(userSagaActions.sagaGetUser());
  //   else navigate("/auth/login");
  // }, []);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwt-token");
    console.log("jwtToken:", jwtToken);

    if (jwtToken) alert("you got JWT token!!");
    else navigate("/auth/login");
  }, []);

  return (
    <BaseLayout>
      <Header
        title="Dashboard layout header"
        navbar={<Navbar links={homepageLinks} />}
      />
      <Content>
        <p>Welcome on the dashboard layout!</p>
        <Outlet />
      </Content>
    </BaseLayout>
  );
};

export { DashboardLayout };
