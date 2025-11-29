export default function LangBlock({languageName, languageIcon}) {
    return (
        <>
            <div className="language-section">
                <img className = "language-section-icon" alt = {languageName} src={languageIcon} />
                <label className="language-section-name">{languageName}</label>
            </div>
        </>
    );
}