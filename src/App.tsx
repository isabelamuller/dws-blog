import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleView } from "./views/Article";
import { HomepageView } from "./views/Homepage";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageView />} />
          <Route path="/post/:slug" element={<ArticleView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
