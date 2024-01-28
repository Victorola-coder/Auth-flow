import { useState } from "react";
import { BASE_URL } from "../config/index";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const res = await response.json();

    console.log(res);
    alert(res.msg);
    window.location.replace("/");
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
        <h3>Login</h3>
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

        <button>login</button>
      </form>
    </>
  );
}
