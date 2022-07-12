import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ setUser }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !email) {
            alert('Please fill in all fields')
            return
        }
        setUser({ name: name, email: email })
        navigate('/dashboard')
    }

    return (
        <section className='form-section'>
            <form className='form' onSubmit={handleSubmit}>
                <h3>Login</h3>
                <div className='form-row'>
                    <label htmlFor='name' className='form-label'>
                        Name
                    </label>
                    <input
                        type='text'
                        className='form-input'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='form-row'>
                    <label htmlFor='email' className='form-label'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='form-input'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button className='form-btn'>Login</button>
            </form>
        </section>
    )
}

export default Login
