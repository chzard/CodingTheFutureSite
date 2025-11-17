import { useState } from 'react'
import {createRoot} from "react-dom/client";
import * as components from "../../../lib/Components.js"
import * as links from "../../../lib/Links.js"
import * as images from "../../../lib/Images.js";
import * as text from "../../../lib/TextDescriptions.js";

import * as sections from "./SectionContents.jsx";

function AboutUsAnnouncementPanel() {
    return (
        <div className = "frontpage-section capture-page">
            <sections.S1_1/>
        </div>
    );
}

function YouCanLearnWhyUs() {
    return (
        <div className = "frontpage-section">
            <sections.S2_1 />
            <sections.S2_2 />
        </div>
    );
}

function Section2_1() {                         /*TODO*/
    return (
        <div className = "content2-1">
            <img alt = "student demos carousel (images)" src="/app/public"/>
        </div>
    );
}

function Section2_2() {                         /*TODO*/
    return (
        <div className = "content2-2">
            <img alt = "student demos carousel (videos)" src="/app/public"/>
        </div>
    );
    /*Carousel of student demos (videos)*/
}

function Content2() {
    return (
        <div className = "frontpage-section">
            <Section2_1 />
            <Section2_2 />
        </div>
    );
}

function Section3_1() {
    const cols = [
        {
            item: (<p>Fill out <a href = {links.classSignUpLink}>this form</a>!</p>),
            alt: "sc for form",
            img: images.START_FORM,
            desc: text.START_FORM
        },
        {
            item: (<p>The Email</p>),
            alt: "email",
            img: images.START_EMAIL,
            desc: text.START_EMAIL
        },
        {
            item: (<p>That's it!</p>),
            alt: "classes start!",
            img: images.START_BEGIN,
            desc: text.START_BEGIN
        }
    ];
    return (
        <div className = "content3-1">
            <div>
                <h1>Getting Started</h1>
            </div>
            <div className = "start-wrapper">
                {
                    cols.map((col) => (
                        <div className = "start-section">
                            {col.item}
                            <img alt = {col.alt} src={col.img}/>
                            <p>{col.desc}</p>
                        </div>
                    ))
                }
            </div>
            <div className = "buttons-wrapper">
                <components.LinkButton innerText="Sign up for lessons!" linkTo={links.classSignUpLink}/>
                <components.LinkButton innerText="Learn more about classes!" linkTo="/"/> {/*TODO*/}
            </div>
        </div>
    );
}

function Content3() {
    return (
        <div className = "frontpage-section">
            <Section3_1 />
        </div>
    );
}

function Section4_1() {
    return (
        <div>
            <img alt = "worldmap" src = {images.WORLD_MAP_IMPACT} />
            <div>
                <p>{text.WORLD_IMPACT}</p>
                <p>{text.WORLD_STATS}</p>
            </div>
        </div>
    );
}

function Section4_2() {
    return (
        <div>
            <h1>Join us!</h1>
            <p>{text.JOIN_US}</p>
            <components.LinkButton innerText="Join us!" linkTo={links.tutorSignUpLink}/>
        </div>
    )
}

function Content4() {
    return (
        <div className = "frontpage-section">
            <Section4_1/>
            <Section4_2/>
        </div>
    );
}
