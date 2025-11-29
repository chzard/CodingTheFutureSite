import { useState } from 'react'
import {createRoot} from "react-dom/client";
import * as components from "../../../lib/Components.js"
import * as links from "../../../lib/Links.js"
import * as images from "../../../lib/Images.js";
import * as text from "../../../lib/TextDescriptions.js";

import * as sections from "./SectionContents.jsx";

export function AboutUsAnnouncementPanel() {
    return (
        <div className = "frontpage-section capture-page">
            <sections.S1_1/>
        </div>
    );
}

export function YouCanLearnWhyUs() {
    return (
        <div className = "frontpage-section">
            <sections.S2_1 />
            <sections.S2_2 />
        </div>
    );
}

export function MediaCarousel() {
    return (
        <div className = "frontpage-section">
            <sections.S3_1 />
            <sections.S3_2 />
        </div>
    );
}

export function GettingStarted() {
    return (
        <div className = "frontpage-section">
            <sections.S4_1 />
        </div>
    );
}

export function ImpactJoinUs() {
    return (
        <div className = "frontpage-section">
            <sections.S5_1/>
            <sections.S5_2/>
        </div>
    );
}
