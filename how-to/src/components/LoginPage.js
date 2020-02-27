import React from "react";

export const LoginPage = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </form>
    </div>
  );
};
