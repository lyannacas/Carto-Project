import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

import { HomePage } from "./pages/home/HomePage";
import { MeusPins } from "./pages/meusPins/meusPinsPage";
import { HeaderPartial } from "./partials/HeaderPartial/HeaderPartial";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPartial />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/meus-pins" element={<MeusPins />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
