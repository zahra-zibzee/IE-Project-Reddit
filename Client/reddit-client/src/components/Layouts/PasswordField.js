import React, { useState } from "react";
const PasswordField = () => {

  const [pass, setPass] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  return (
      <>
    <label htmlFor="password">Password</label>
    <input
      id="password"
      type={passwordShown ? "text" : "password"}
      name="password"
      className="form-control form-control-md"
      onChange={(e) => setPass(e.target.value)}
      onMouseEnter={() => setPasswordShown(true)}
      onMouseLeave={() => setPasswordShown(false)}
      required=""
    />
    </>
  );
};

export default PasswordField;