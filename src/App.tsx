import routers from "./routers";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
