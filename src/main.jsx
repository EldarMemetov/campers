import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./components/App/App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />{" "}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {" "}
        <BrowserRouter>
          <HelmetProvider>
            {" "}
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
