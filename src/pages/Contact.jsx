import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({
        'name': '',
        'email': '',
        'message': '' 
    })
    const [formError, setFormError] = useState({
        'name': '',
        'email': '',
        'message': '' 
    })
    const [isSent, setIsSent] = useState(false)

    function handleChange(e) {
        //console.log(e.target.value, e.target.name)
        setForm(prev => ({...prev, [e.target.name]: e.target.value}) )
    }

    function handleBlur (e) {

        // validate required entries
        const trimmedValue = e.target.value.trim()
        if (!trimmedValue) {
            // console.log(`${e.target.name} is required.`)
            setFormError(prev => ({...prev, [e.target.name]: 'required'}) )
        }
        else {
            setFormError(prev => ({...prev, [e.target.name]: ''}) )
        }

        // validate email
        if (e.target.name === "email") {
            const userEmail = e.target.value
            const emailTest = /^([a-z0-9_.-]+)@([a-z0-9.-]+)\.([a-z]{2,12})$/i
            if (!userEmail.match(emailTest)) {
                // console.log(`invalid email.`)
                setFormError(prev => ({...prev, email: 'invalid email'}))
            }
            else {
                setFormError(prev => ({...prev, email: ''}))
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (!formError.name && !formError.email && !formError.message) {
            console.log(form)
            setForm({
                'name': '',
                'email': '',
                'message': '' 
            })
            setFormError({
                'name': '',
                'email': '',
                'message': '' 
            })
            setIsSent(true)
        }
    }
    
    return (
        <>
            {!isSent ? (
                <div className="contact-form">
                    <h1>Contact</h1>
                    <form onSubmit={handleSubmit} aria-describedby="formHelp">
                        <label htmlFor="name">Name:</label> <span aria-live="polite">{formError.name}</span>
                        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your name" aria-required="true" />

                        <label htmlFor="email">Email:</label> <span aria-live="polite">{formError.email}</span>
                        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your email" aria-required="true" />
                        
                        <label htmlFor="message">Message:</label> <span aria-live="polite">{formError.message}</span>
                        <textarea id="message" name="message" value={form.message} onChange={handleChange} onBlur={handleBlur} placeholder="Your message" aria-required="true"></textarea>

                        <button type="submit">Send</button>
                    </form>
                </div>
            ) : (
                <p>Thanks for your message!</p>
            )}
        </>
    );
}
    