import { useState } from "react"
import {Validation} from '../../validacion'
import "./form.css"

const Form = (props)=>{
    const {login} = props

    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const [errors,setErrors] = useState({})

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })

        setErrors({
            ...errors,
            [event.target.name]: Validation(userData,event.target.name)
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData)
    }

    return (
        <div class="form">
            <form onSubmit={handleSubmit}  >
                <div >
                <label class="aasd" htmlFor="email">Email</label><br/>
                <input class="aasdc" required="" type="text" name="email" value={userData.email} onChange={handleChange} /> <br />
                <div class="spanes">{errors.email !== ''? <span  >{errors.email}</span> : ''}</div>
                </div>
                <br />
                <div >
                <label class="aasd" htmlFor="password">Password</label><br />
                <input  class="aasdc" required="" type="text" name="password" value={userData.password} onChange={handleChange}/> <br />
                <div class="spanes">{errors.password!== ''? <span >{errors.password}</span> : ''}</div>
                </div>
                <br />
                <div>
                <button type="submit" class="botonnn">login</button>
                </div>
            </form>
        </div>
    )
}

export default Form

