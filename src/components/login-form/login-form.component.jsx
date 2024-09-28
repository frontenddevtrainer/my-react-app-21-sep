import React, { useState } from "react";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const doLogin = (e) => {
    e.preventDefault();
    // API Call using Axios to JSON
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name] : value })
  };

  console.log(form);

  return (
    <form onSubmit={doLogin}>
      <div>
        <label>Email</label>
        <input name="email" onChange={handleChange} />
      </div>
      <div>
        <label>Password</label>
        <input name="password" onChange={handleChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
