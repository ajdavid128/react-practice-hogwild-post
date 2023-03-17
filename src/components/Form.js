import {useState} from 'react';


function Form() {

    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: ""
    })


    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="first name"
                    id="firstName"
                    value=""
                
                />
                <input
                    type="text"
                    placeholder="last name"
                    id="lastName"
                    value=""
                />
                <button>Cool</button>
            </form>
        </div>
    )
};

export default Form;