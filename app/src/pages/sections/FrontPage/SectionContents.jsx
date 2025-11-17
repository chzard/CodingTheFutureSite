import * as components from "../../../lib/Components.js"
import * as links from "../../../lib/Links.js"
import * as images from "../../../lib/Images.js";
import * as text from "../../../lib/TextDescriptions.js";

export function S1_1() {
    return (
        <>
            <div className = "frontpage-section-left">
                <h2>Free Virtual CS Classes & Tutoring</h2>
                <components.LinkButton innerText = "Sign up today!" linkTo ={links.classSignUpLink} />
                <h3>{text.CTF_DESCRIPTION}</h3>
            </div>
            <div className = "frontpage-section-right">
                <img className = "computer-graphic" alt="computer graphic" src = "src/assets/icons/computer.png"/>
            </div>
        </>
    );
}

export function S2_1() {
    const rows = [
        [
            {nm: "python", mg: images.LANG_PY_ICON},
            {nm: "java", mg: images.LANG_JAVA_ICON},
            {nm: "html", mg: images.LANG_HTML_ICON},
            {nm: "javascript", mg: images.LANG_JS_ICON}
        ],
        [
            {nm: "c++", mg: images.LANG_CPP_ICON},
            {nm: "Cybersecurity", mg: images.LANG_CYBER_ICON},
            {nm: "Machine learning", mg: images.LANG_ML_ICON},
            {nm: "Robotics", mg: images.LANG_ROBO_ICON}
        ]
    ];
    return (
        <div className = "content1-1">
            <h1 className = "section-heading">With CTF, you could learn...</h1>
            <>
                {
                    rows.map((row) => (
                        <div className = "langsection-row">
                            {row.map((lang) => (
                                <components.LangBlock languageName= {lang.nm} languageIcon={lang.mg}/>
                            ))}
                        </div>
                    ))
                }
            </>
        </div>

    );
}

export function S2_2() {
    const values = [
        {val: "Effective instruction", img: images.VALUES_EFFECTIVE_INSTRUCTION, p: text.VALUES_EFFECTIVE_INSTRUCTION},
        {val: "Accessibility", img: images.VALUES_ACCESSIBILITY, p: text.VALUES_ACCESSIBILITY},
        {val: "Student Leadership", img: images.VALUES_STUDENT_LEADERSHIP, p: text.VALUES_STUDENT_LEADERSHIP}

    ];
    return (
        <div className = "content1-2">
            <h1 className = "section-heading">Why us?</h1>
            <div className = "values-section">
                {
                    values.map((value) => (
                            <div className = "values-wrapper">
                                <img alt = {value.val + " graphic"} src = {value.img}/>
                                <p>{value.p}</p>
                            </div>
                        )
                    )
                }

            </div>
        </div>
    );
}



