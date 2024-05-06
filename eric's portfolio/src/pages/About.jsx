import headShot from "../assets/media/bio-square-lg.jpg"

export default function About() {
    return (
        <>
            <h1>About Me</h1>
            <div className="about-me">
                <img src={headShot} alt="photo of Eric"/>
                <p>Hi! I'm Eric. Lawyer by day, full stack tinkerer by night. I build games to delight my 7-year-old, games to delight myself, legal-stuff that helps me at work, and other projects that interest me. I'm currently leveling up my skills in a web dev coding bootcamp.</p>
            </div>
        </>
    )
}

    