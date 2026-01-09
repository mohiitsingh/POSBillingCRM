import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-wrapper">
      {/* LEFT BRAND SECTION */}
      <div className="login-brand">
        <h1>POSBillingCRM</h1>
        <p>
          Smart billing, inventory & CRM <br />
          built for modern businesses
        </p>
      </div>

      {/* RIGHT LOGIN SECTION */}
      <div className="login-panel">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <span className="login-caption">Please login to your account</span>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>

          <footer>© {new Date().getFullYear()} POSBillingCRM</footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
