import React, { useState } from "react";
import ReactModal from "react-modal";

import { Link } from "react-router-dom";

const customStyles = {
  content: {
    maxWidth: "90%",
    minWidth: "340px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "red",
  },
};

const PageHeader = () => {
  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);

  const toggle = () => setmodal((m) => !m);
  const toggle2 = () => setmodal2((m) => !m);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <nav>
        <ul className="py-4 px-8 justify-between flex  bg-red-900 shadow ">
          <div className="flex font-bold text-lg">MOVIEW</div>
          <div className="flex gap-4">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/tv-shows">TV Shows</Link>
            </li>
            <li>
              <button onClick={toggle}>Login</button>
            </li>
            <li>
              <button onClick={toggle2}>Registration</button>
            </li>
          </div>
        </ul>
      </nav>

      {modal && (
        <ReactModal
          isOpen={modal}
          // onAfterOpen={toggle}
          shouldCloseOnOverlayClick={false}
          onRequestClose={toggle}
          contentLabel="Example Modal"
          className=""
          style={{
            ...customStyles,
          }}
        >
          <div className="w-full">
            <button
              title="close"
              className="absolute top-1 right-2"
              onClick={toggle}
            >
              X
            </button>

            <form
              onSubmit={handleSubmit}
              className="flex px-4 flex-col justify-center gap-4 items-center"
            >
              <h2 className="text-2xl font-bold text-center">Login </h2>
              <div className="w-full flex flex-col">
                <label htmlFor="">Full Name</label>
                <input
                  className="px-2 py-1 shadow bg-gray-50 rounded-sm"
                  type="text"
                  placeholder="Sahil Arora"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="">Email</label>

                <input
                  className="py-1 px-2 shadow bg-gray-50 rounded-sm"
                  type="text"
                  placeholder="xyz@email.com"
                />
              </div>
              <button className="p-2 bg-green-400 text-black ">Submit</button>
            </form>
          </div>
        </ReactModal>
      )}

      {modal2 && (
        <ReactModal
          isOpen={modal2}
          // onAfterOpen={toggle}
          shouldCloseOnOverlayClick={false}
          onRequestClose={toggle2}
          contentLabel="Example Modal"
          className=""
          style={{
            ...customStyles,
          }}
        >
          <div className="w-full">
            <button
              title="close"
              className="absolute top-1 right-2"
              onClick={toggle2}
            >
              X
            </button>

            <form
              onSubmit={handleSubmit}
              className="flex px-4 flex-col justify-center gap-4 items-center"
            >
              <h2 className="text-2xl font-bold text-center">Registration </h2>
              <div className="w-full flex flex-col">
                <label htmlFor="">First Name</label>
                <input
                  className="px-2 py-1 shadow bg-gray-50 rounded-sm"
                  type="text"
                  placeholder="Sahil Arora"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="">Last Name</label>
                <input
                  className="px-2 py-1 shadow bg-gray-50 rounded-sm"
                  type="text"
                  placeholder="Sahil Arora"
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="">Email</label>

                <input
                  className="py-1 px-2 shadow bg-gray-50 rounded-sm"
                  type="text"
                  placeholder="xyz@email.com"
                />
              </div>
              <button className="p-2 bg-green-400 text-black ">Submit</button>
            </form>
          </div>
        </ReactModal>
      )}
    </>
  );
};

export default PageHeader;
