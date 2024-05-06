export default function Resume() {    
    const pdfUrl = "https://elindstr-portfolio.netlify.app/assets/resume.pdf";
    
    return (
        <>
            <h1>Resume</h1>
            <a href={pdfUrl} download="Resume.pdf">
                <button>Download PDF</button>
            </a>
        </>
    )
}

    