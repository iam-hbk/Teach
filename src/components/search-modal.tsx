import React from "react";
import { FiSearch } from "react-icons/fi";
type Props = {};

const SearchModal = (props: Props) => {
  return (
    <>
      <button
        className="btn btn-circle btn-primary btn-ghost"
        onClick={() =>
          (
            document.getElementById("search-modal") as HTMLDialogElement
          ).showModal()
        }
      >
        {/* <span>Search</span> */}
        <FiSearch className="text-xl font-bold" />
      </button>
      <dialog id="search-modal" className="modal">
        <div className="modal-box">
          <input
            type="search"
            name="search on teach"
            id="search-on-teach"
            placeholder="Search"
            className="input input-bordered w-full focus:border-none focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <p className="py-4 w-full text-center text-gray-400 font-light  text-sm">
            Looking for something specific ? Search for it here.
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline btn-primary">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SearchModal;
