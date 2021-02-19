import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import products from "./AmazonBasic.js";
import electronics from "./Electronics.js";
import gaming from "./gaming.js";
import ComputerAccessories from "./computer.js";
import IdealTv from "./idealtv.js";
import topCaegories from "./topcategories.js";
import users from "./users.js";

// App config

const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:Pdpatel267@cluster0.ms2ka.mongodb.net/amazondb?retryWrites=true&w=majority";
// middlewares
app.use(express.json());
app.use(cors());

// db init

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// api

app.get("/", (req, res) => res.status(200).send("Hello World"));

// _________________________--user____________________________________

app.post("/users/data", (req, res) => {
  const userDetail = req.body;
  users.create(userDetail, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/users/data", (req, res) => {
  users.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// --------------------------------------------------------------------

app.post("/products/amazonbasic/data", (req, res) => {
  const productDetail = req.body;
  products.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/amazonbasic/data", (req, res) => {
  products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// -----------------------------Electronics------------------------------------

app.post("/products/electronics/data", (req, res) => {
  const productDetail = req.body;
  electronics.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/electronics/data", (req, res) => {
  electronics.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// ______Gaming Accessories________________

app.post("/products/gaming/data", (req, res) => {
  const productDetail = req.body;
  gaming.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/gaming/data", (req, res) => {
  gaming.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// _________________________computer & accessories____________________________
app.post("/products/computer&accessories/data", (req, res) => {
  const productDetail = req.body;
  ComputerAccessories.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/computer&accessories/data", (req, res) => {
  ComputerAccessories.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// _________________________________idealtv____________________________________

app.post("/products/idealtv/data", (req, res) => {
  const productDetail = req.body;
  IdealTv.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/idealtv/data", (req, res) => {
  IdealTv.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// ____________________________________top categories_____________________________

app.post("/products/topcategories/data", (req, res) => {
  const productDetail = req.body;
  topCaegories.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/products/topcategories/data", (req, res) => {
  topCaegories.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listner

app.listen(port, () => console.log("listening on the port: ", port));
