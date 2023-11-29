import React, { useState } from "react";

function Form() {

    const InitialValue = {
        name: "",
        email: "",
        passowrd: "",
    }

    const [formdata, setFormData] = useState(InitialValue)

   

    const HandleSubmit = (e) => {
        
        alert(JSON.stringify(formdata, undefined , 2))

    }

    return (
        <div>
            <form onSubmit={HandleSubmit} >
                <label>Name</label>
                <input type="text" value={formdata.name} onChange={(e) => setFormData({ ...formdata, name: e.target.value })} ></input>
                <br />
                <label>Email</label>
                <input type="text" value={formdata.email} onChange={(e) => setFormData({ ...formdata, email: e.target.value })}></input>
                <br />
                <label>Password</label>
                <input type="text" value={formdata.passowrd} onChange={(e) => setFormData({ ...formdata, passowrd: e.target.value })}></input>
                <br />
                <button type="Submit">Submit</button>
                <p>{JSON.stringify(formdata)}</p>
            </form>
        </div>
    )

}

export default Form;