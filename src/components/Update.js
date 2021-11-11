import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "./InputForm";

export default function Update() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [ID, setID] = useState(null);

  // send data into mock api with function
  const sendDataApi = (e) => {
    e.preventDefault();
    axios
      .put(`https://6188bd7ed0821900178d74f8.mockapi.io/crud/${ID}`, {
        fullName,
        email,
      })
      .then(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    setFullName(localStorage.getItem("fullName"));
    setEmail(localStorage.getItem("email"));
    setID(localStorage.getItem("ID"));
  }, []);

  return (
    <div className=" w-4/5 md:w-2/6 m-auto text-center border border-indigo-100 py-10 px-8">
      <form onSubmit={sendDataApi}>
        <InputForm
          type="text"
          name="fullname"
          value={fullName || ""}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
        />
        <InputForm
          type="email"
          name="email"
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <button
          type="submit"
          className="bg-indigo-500 border border-indigo-500 rounded-sm text-white px-9 py-2 font-semibold uppercase hover:bg-transparent hover:text-indigo-500 transition-all"
        >
          Update
        </button>
      </form>
    </div>
  );
}
