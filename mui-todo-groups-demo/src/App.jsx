import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import AddGroup from "./pages/AddGroup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="groups" element={<Groups />} />
            <Route path="groups/create" element={<AddGroup />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
