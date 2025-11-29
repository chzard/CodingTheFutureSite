import { useState } from 'react'
import {createRoot} from "react-dom/client";
import * as components from "../lib/Components.js"
import * as links from "../lib/Links.js"
import * as images from "../lib/Images.js";
import * as text from "../lib/TextDescriptions.js";

import * as sections from "./sections/FrontPage/FrontPageSections.jsx";

function FrontPage() {
    return (
        <main>
            <sections.AboutUsAnnouncementPanel/>
            <sections.YouCanLearnWhyUs/>
            <sections.MediaCarousel/>
            <sections.GettingStarted/>
            <sections.ImpactJoinUs/>
        </main>
    );
}

export default FrontPage
