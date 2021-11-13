import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";

export default function Create() {
  let navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  // send data into mock api with function
  const sendDataApi = (e) => {
    e.preventDefault();
    axios
      .post(`https://6188bd7ed0821900178d74f8.mockapi.io/crud`, {
        fullName,
        email,
      })
      .then(() => {
        setError(false);
        navigate("/");
      })
      .catch(() => {
        setError(true);
      });
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
  };

  return (
    <div className=" w-4/5 md:w-2/6 m-auto text-center border border-indigo-100 py-10 px-8">
      <form onSubmit={sendDataApi}>
        <InputForm
          type="text"
          name="fullname"
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />
        <InputForm
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {error && (
          <p className="mb-4 text-center text-sm text-red-300">
            Faild to post data
          </p>
        )}
        <button
          type="submit"
          className="bg-indigo-500 border border-indigo-500 rounded-sm text-white px-9 py-2 font-semibold uppercase hover:bg-transparent hover:text-indigo-500 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
