const pdfUrl = "/assets/resume.pdf"

export default function Resume() {        
    return (
        <div>
            <h1>Resume</h1>
            <a href={pdfUrl} download="resume.pdf">
                <button>Download PDF</button>
            </a>
        </div>
    )
}

    