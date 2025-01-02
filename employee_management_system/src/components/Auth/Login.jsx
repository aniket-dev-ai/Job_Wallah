import React, { useState } from "react";

function Login() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')



  const submihandeler = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-4">
        <form
        
          onSubmit={submihandeler}
          className="flex flex-col items-center space-y-4 p-20"
        >
          <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full p-2 bg-transparent placeholder:text-white text-whi p-20te"
            type="email"
            placeholder="Enter Email Address"
          />
          <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
            required
            className="border-2 border-emerald-600 rounded-full p-2 bg-transparent placeholder:text-white text-white"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="bg-emerald-600 uppercase w-full text-white rounded-full px-4 py-2">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
