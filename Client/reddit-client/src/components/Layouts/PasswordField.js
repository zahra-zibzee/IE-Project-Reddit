import React, { useState } from "react";
const PasswordField = ({ getPassowrd }) => {
  const [pass, setPass] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  const updatePass = (passValue) => {
    setPass(passValue);
    getPassowrd(passValue);
  };

  return (
    <>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type={passwordShown ? "text" : "password"}
        name="password"
        className="form-control form-control-md"
        onChange={(e) => updatePass(e.target.value)}
        onMouseEnter={() => setPasswordShown(true)}
        onMouseLeave={() => setPasswordShown(false)}
        value={pass}
        required=""
      />
    </>
  );
};

export default PasswordField;
