import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <App />
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        // Define default options
        className: "",
        duration: 4000,
        style: {
          background: "grey",
          color: "#fff",
          border: "3px solid red",
        },

        // Default options for specific types
        error: {
          theme: {
            primary: "red",
            secondary: "black",
          },
        },
      }}
    />
  </Provider>
  // </StrictMode>
);
