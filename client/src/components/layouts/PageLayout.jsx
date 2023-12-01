import { Outlet } from "react-router-dom";
import { BaseLayout } from "./BaseLayout";

const PageLayout = ({ title }) => {
  return (
    <BaseLayout>
      <h1>{title}</h1>
      <Outlet />
    </BaseLayout>
  );
};

export { PageLayout };
