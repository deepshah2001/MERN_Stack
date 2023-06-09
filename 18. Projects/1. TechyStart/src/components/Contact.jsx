import React from "react"

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Enter Name"/>
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Enter Email" />
                </div>

                <div>
                    <label>Message</label>
                    <input type="password" placeholder="Enter Query" />
                </div>

                <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact;