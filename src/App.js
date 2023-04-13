import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layout";
import { publicRoute } from "./router";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      {publicRoute.map((route, index) => {
        const Page = route.component;
        if (route.layout) {
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout children={Page}></Layout>}
            ></Route>
          );
        } else {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <>
                  <Page></Page>
                </>
              }
            ></Route>
          );
        }
      })}
    </Routes>
  );
}

export default App;
