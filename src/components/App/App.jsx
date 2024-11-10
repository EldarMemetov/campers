import "./App.css";
import HomePage from "../../pages/HomePage/HomePage";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import Loading from "../Loading/Loading";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
const Catalog = lazy(() => import("../../pages/Catalog/Catalog"));
const CamperDetails = lazy(() =>
  import("../../pages/CamperDetails/CamperDetails")
);

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<CamperDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
