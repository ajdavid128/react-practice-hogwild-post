import {useState} from 'react';


function Form() {

    const [formInfo, setFormInfo] = useState({
        firstName: "",
        lastName: ""
    })

    const handleChange = (e) => {
        console.log(e.target.value)
        const key = e.target.name;
        const value = e.target.value;

        setFormInfo({
            ...formInfo, [key]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formInfo)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="first name"
                    name="firstName"
                    id="firstName"
                    value={formInfo.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    id="lastName"
                    value={formInfo.lastName}
                    onChange={handleChange}
                />
                <button>Cool</button>
            </form>
        </div>
    )
};

export default Form;