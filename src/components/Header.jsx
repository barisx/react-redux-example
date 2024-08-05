import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { modalToggle } from "../redux/modalSlice";

const Header = () => {
  const modal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(modalToggle());
  };
  return (
    <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3">
      <div className="text-3xl">REACT UYGULAMA</div>
      <div className="flex items-center gap-5">
        <div className="text-black">
          <select className="h-10 rounded-lg" name="" id="">
            <option value="asc">ARTAN</option>
            <option value="desc">AZALAN</option>
          </select>
        </div>

        <input
          className="h-10 rounded-lg px-4"
          type="text"
          placeholder="Arama yapınız.."
        />

        <div
          onClick={handleToggle}
          className="bg-indigo-800 w-10 min-h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdOutlinePostAdd />
        </div>
      </div>
    </div>
  );
};

export default Header;
