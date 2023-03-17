import { Helmet } from "react-helmet";
import { PUBLICE_ROUTE } from "../interfaces/interFace";

const PublicRoute = ({ element: RouteComponent, title }: PUBLICE_ROUTE) => {

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <RouteComponent />
    </>
  )
};

export { PublicRoute };