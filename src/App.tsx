import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleView } from "./views/Article";
import { HomepageView } from "./views/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageView />} />
        <Route path="/posts/:id" element={<ArticleView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
