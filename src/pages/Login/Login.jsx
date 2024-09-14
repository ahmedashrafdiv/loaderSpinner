import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const heandleChange = (e) => {
    const event = e.target;
    setUser({ ...user, [event.name]: event.value });
    console.log(user);
  };

  const isFormValid = () => {
    return user.name && user.phone && user.email && user.password.length > 10;
  };

  const handleSubmit = (e) => {
    if (isFormValid()) {
      alert("Form submitted successfully");
      e.preventDefault();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            onChange={heandleChange}
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label htmlFor="Phone" className="form-label">
            Phone number
          </label>
          <input
            name="phone"
            type="number"
            className="form-control"
            onChange={heandleChange}
            id="Phone"
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={heandleChange}
            aria-describedby="emailHelp"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            onChange={heandleChange}
            id="exampleInputPassword1"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </>
  );
}
