import React, { useEffect, useState } from "react";
import "./ProductContent.css";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogTitle } from "@material-ui/core";
import { Dropdown } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import axios from "./axios";
function ProductContent({ db }) {
  const [openPopup, setOpenPopup] = useState(false);

  const category = [
    {
      text: "AmazonBasic",

      value: "amazonbasic",
    },
    {
      text: "Electronics",

      value: "electronics",
    },
    {
      text: "Gameing Accessories",

      value: "gaming",
    },
    {
      text: "Top Categories",

      value: "topcategories",
    },
    {
      text: "Computer & Accessories",

      value: "computer&accessories",
    },
    {
      text: "Ideal TV",

      value: "idealtv",
    },
  ];

  const [id, setId] = useState();
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [type, setType] = useState(category.title);
  const [products, setProducts] = useState("");

  const handleSubmit = () => {
    const article = {
      id: id,
      title: title,
      imgUrl: imgUrl,
      price: parseFloat(price),
      rating: parseFloat(rating),
      category: type,
    };

    setId("");
    setImgUrl("");
    setPrice("");
    setTitle("");
    setType("");
    setRating("");

    axios
      .post(`/products/${article.category}/data`, article)
      .then(() => setOpenPopup(false))
      .catch((error) => alert(error.message));

    window.location.reload();
  };
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get(`/products/${db}/data`);
      setProducts(data);
    };
    fetchdata();
  }, [db]);
  return (
    <div className="product_content">
      <div className="heading">
        <h1>Products</h1>
        <p className="add_product_btn" onClick={() => setOpenPopup(true)}>
          + Add Product
        </p>
      </div>

      <Dialog open={openPopup} maxWidth={"sm"} fullWidth={true}>
        <DialogTitle>New Product</DialogTitle>
        <DialogContent dividers>
          <div className="dialog__main__form">
            <div className="dialog__id">
              <input
                type="text"
                placeholder="ID"
                className="id__input dialog__input"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="dialog__title">
              <input
                type="text"
                className="title__input dialog__input"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="dialog__imgurl">
              <input
                type="text"
                className="imgurl__input dialog__input"
                placeholder="ImageURl"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </div>
            <div className="dialog__rating__price">
              <div className="dialog__price">
                <input
                  type="text"
                  placeholder="Price"
                  className="price__input dialog__input"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="dialog__rating ">
                <input
                  type="value"
                  placeholder="Rating"
                  className="rating__input dialog__input"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
            </div>

            <div className="dialog__last__line">
              <div className="dialog__dropdown">
                <Dropdown
                  search
                  placeholder="Category"
                  options={category}
                  selection
                  onChange={(e, data) => setType(data.value)}
                />
              </div>

              <div className="dialog__control__buttons">
                <button className="dialog__submit" onClick={handleSubmit}>
                  Add Product
                </button>
                <button
                  className="dialog__close"
                  onClick={() => {
                    setOpenPopup(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {products.data?.map((product) => (
        <div className="products__info__content">
          <div className="image__info">
            <img src={product.imgUrl} alt="" />
          </div>
          <div className="info__tags">
            <p className="id_number">ID: &nbsp;&nbsp;{product.id}</p>
            <p className="title__tag">Title: &nbsp;&nbsp;{product.title}</p>
            <p className="imgurl__tag">
              ImageURL: &nbsp;&nbsp;{product.imgUrl}
            </p>
            <p className="rating__tag">
              Rating: &nbsp;&nbsp;⭐ {product.rating}
            </p>
            <p className="price__tag">Price: &nbsp;&nbsp;₹ {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductContent;
