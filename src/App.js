
import About from "./camponents/About";
import Navbar from "./camponents/Navbar";
import TextForm from "./camponents/TextForm";
import Textsummary from "./camponents/Textsummary";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="Sonu react" AboutText="About us" />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm textarea="Enter the text to analyze" />} />
            <Route path="/About" element={<About />} />
            {/* for unknown page not found */}
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <h1>Error 404 Page not found!</h1>
                </main>
              }
            />
          </Routes>
          <Textsummary/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
