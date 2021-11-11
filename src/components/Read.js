/* eslint-disable array-callback-return */
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export default function Read() {
  const [apiData, setApiData] = useState([]);

  // get data from mockapi with useEffect
  useEffect(() => {
    axios
      .get(`https://6188bd7ed0821900178d74f8.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  // update data after deletion
  const getUpdateData = () => {
    axios
      .get(`https://6188bd7ed0821900178d74f8.mockapi.io/crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6188bd7ed0821900178d74f8.mockapi.io/crud/${id}`)
      .then(() => {
        getUpdateData();
      });
  };

  // set id into local storage
  const setId = (id) => {
    localStorage.setItem("ID", id);
  };

  return (
    <div className=" w-3/6 md:w-2/6 m-auto text-center ">
      <Link to="/create">
        <button className="py-3 px-8 border border-indigo-500 m-auto mb-9 uppercase hover:bg-indigo-500 hover:text-white transition-all">
          Create User
        </button>
      </Link>
      <table className="table-auto w-full border border-indigo-300 py-10 px-8">
        <thead>
          <tr>
            <th className="border border-indigo-300 py-2">Name</th>
            <th className="border border-indigo-300  py-2">Email</th>
            <th className="border border-indigo-300  py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((data) => {
            return (
              <tr key={data.id}>
                <td className="border border-indigo-300 py-2">
                  {data.fullName}
                </td>
                <td className="border border-indigo-300 py-2">{data.email}</td>
                <td className="border border-indigo-300 py-2">
                  <div className="flex justify-center">
                    <Link to="/Update">
                      <svg
                        onClick={() => setId(data.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 cursor-pointer hover:text-indigo-500 transition-all mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </Link>

                    <svg
                      onClick={() => onDelete(data.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 cursor-pointer hover:text-indigo-500 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
