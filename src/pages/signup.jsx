import { useState } from "react"; // this is to manage the states in our app

import { BASE_URL } from "../config/index"; // import the base_url of the endpoint

export default function SignUp() {
  // set the states in the objects for the form
  const [formData, setFormData] = useState({
    email: "", // string : we dont need to set types cos na js not ts
    password: "", // same as above
  });

  // create a function that handles submission of the form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // this prevents the page from reloading when the form is submitted

    const response = await fetch(`${BASE_URL}/auth/SignUp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const res = await response.json();

    console.log(res);
    alert(res.msg);
    // redirects user to login
    window.location.replace("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>SignUp</h3>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter email address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="enter password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </div>

        <button>SignUp</button>
      </form>
    </>
  );
}
