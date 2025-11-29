import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createRoot} from "react-dom/client";
import * as components from "./lib/Components.js"
import * as links from "./lib/Links.js"
import * as images from "./lib/Images.js";
import * as text from "./lib/TextDescriptions.js";

import FrontPage from "./pages/FrontPage.jsx";

function App() {
    return (
      <>
          <FrontPage />
      </>
    );
}

export default App
