import {useState} from 'react'




const Contact = () => {
const initialize = {
    name:'',
    email:'',
    message:''
}

const [formState, setFormState] = useState(initialize)

function handleSubmit(event) {
event.preventDefault()
console.log('hello')
setFormState(formState)
console.log(formState)

}

function handleChange(event) {
setFormState({...formState, [event.target.id]:event.target.value})
}



    return (
        <>
 
       <section className="form-section" >

       <form onSubmit={handleSubmit} action="https://formsubmit.co/el/juhazu" method="POST">
        <p>Contact Me</p>
       <input type='text' id='name' name="name" placeholder="name" onChange={handleChange} value={formState.name} required/>
       <input type='email' id='email' name="email" placeholder="email" onChange={handleChange} value={formState.email} required/>
       <textarea id='message' name="message" placeholder="message" required />
       <button className="submit-btn">submit</button>

       </form>
       </section>
        </>
    )
}

export default Contact;