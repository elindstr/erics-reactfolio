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
        
        {!isSent? (
            <>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label><input value={form.name} onChange={handleChange} onBlur={handleBlur} name="name" type="text" placeholder="name"/> <span>{formError.name}</span> <br/>

                <label htmlFor="email">Email: </label><input value={form.email}onChange={handleChange} onBlur={handleBlur} name="email" type="email" placeholder="email"/> <span>{formError.email}</span><br/>

                <label htmlFor="message">Message: </label><textarea value={form.message} onChange={handleChange} onBlur={handleBlur} name="message" placeholder="message" /> <span>{formError.message}</span> <br/>

                <button>Send</button>
            </form>
            </>
            
        ): (<p>Thanks for your message!</p>)}
        </>
    )
}
    