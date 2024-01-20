import { useState } from "react";

export default function SignUp() {
  const BASE_URL = "https://cart-royal-api.onrender.com";

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

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
