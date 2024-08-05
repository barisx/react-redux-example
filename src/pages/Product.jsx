import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../components/Modal";
import { createDataFunc } from "../redux/dataSlice";
import Button from "../components/Button";
import { modalToggle } from "../redux/modalSlice";

const Product = () => {
  const modal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });

  const onChangeFunc = (e, type) => {
    if (type === "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const buttonFunc = () => {
    dispatch(createDataFunc(productInfo));
    dispatch(modalToggle()); // Close the modal after creating the product
  };

  const contentModal = (
    <>
      <input
        type="text"
        placeholder="Ürün ekle"
        name="name"
        id="name"
        onChange={(e) => onChangeFunc(e, "name")}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Fiyat ekle"
        name="price"
        id="price"
        onChange={(e) => onChangeFunc(e, "price")}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <input
        type="file"
        placeholder="Resim Seç"
        name="url"
        id="url"
        onChange={(e) => onChangeFunc(e, "url")}
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      <Button btnText="Ürün oluştur" onClick={buttonFunc} />
    </>
  );

  return (
    <div>
      <ProductCard />
      {modal && (
        <Modal
          content={contentModal}
          title="Ürün oluştur"
          btnText="Kapat"
          btnFunc={() => dispatch(modalToggle())}
          onClose={() => dispatch(modalToggle())}
        />
      )}
    </div>
  );
};

export default Product;
