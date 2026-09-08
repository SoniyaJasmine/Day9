import { useState } from "react";

function FormValidation () {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setformData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit =(e) => {
        e.preventDefault();

        let newErrors = {};

        if(!namePattern.test(formData.name)){
            newErrors.name = "Name should contain only letters and spaces";
        }
        if(!emailPattern.test(formData.email)){
            newErrors.email = "Please enter a valid email address";
        }
        if(!mobilePattern.test(formData.mobile)){
            newErrors.mobile = "Mobile number must contain exactly 10 digits"
        }
        if(!passwordPattern.test(formData.password)){
            newErrors.password = "Password must have 8 characters, one uppercase, one lowercase and one number";
        }
        
        setErrors(newErrors);

        if (Object.kets(newErrors).length === 0){
            console.log("Registration Successful");
            console.log(formData)
            alert("Registration Successfull");
        }
    };

    return (
        <div>
            <h2>Registration form</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="" value={formData.name} placeholder="Enter your name" />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                    <br />
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" id="" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                    {errors.email && (
                        <p>{errors.email}</p>
                    )}
                </div>
                    <br />
                <div>
                    <label htmlFor="">Mobile Number</label>
                    <input type="text" name="mobile" id="" value={formData.mobile} onChange={handleChange} placeholder="Enter 10 digit mobile number" />
                    {errors.mobile && (
                        <p>{errors.mobile}</p>
                    )}
                </div>
                    <br />
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" id="" value={formData.password} onChange={handleChange} placeholder="Enter password" />
                    {errors.password && (
                        <p>{errors.password}</p>
                    )}
                </div>
                    <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default FormValidation;