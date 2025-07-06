import { useState } from "react";
import "./App.scss";
import NewsletterModal from "./components/NewsletterModal";

import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <>
      <NewsletterModal />
      <AppRouter />
    </>
  );
}

export default App;
