import React, { useState } from "react";

export const LoginPage = () => {
  const [cred, setCred] = useState({
    username: "",
    password: ""
  });

  const handleChanges = e => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const submit = e => {
    e.preventDefault();
    console.log(cred);
  };
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChanges}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChanges}
        />
        <button>Login</button>
      </form>
    </div>
  );
};
