import { Input } from "../ui/input";
import { useState } from "react";

import { LoginData } from "./LoginInterface";
import { Button } from "../ui/button";

const Login = () => {
  const [userInfo, setUserInfo] = useState<LoginData>({
    email: "",
    password: "",
    resetPassword: "",
  });

  // Set state when input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setUserInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Handle login form submit.
  // Sends a request to the server.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(userInfo);
  };

  return (
    <div className="border-2 flex flex-1 justify-center items-center">
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={userInfo.email}
            autoComplete="true"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={userInfo.password}
            required
          />
          <Input
            type="password"
            name="resetPassword"
            placeholder="Re-type Password"
            onChange={handleChange}
            value={userInfo.resetPassword}
            required
          />
          <Button type="submit">SUBMIT</Button>
        </form>
      </div>
    </div>
  );
};

export { Login };
