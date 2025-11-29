export default function LinkButton({innerText, linkTo}) {
    return (
        <>
            <div className = "linkbutton-wrapper">
                <span style ={{cursor: "pointer"}}>
                    <a className = "linkbutton" target="_blank" rel="noopener noreferrer" href = {linkTo}>
                        {innerText}
                    </a>
                </span>
            </div>
        </>
    );
}