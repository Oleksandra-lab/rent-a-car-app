import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));


function App() {
  return (
    <>
    <Header/>
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
