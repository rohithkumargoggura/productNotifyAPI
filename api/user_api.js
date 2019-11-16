var router = require("express").Router();
// import totalProducts from "./data";

const totalProducts = [
  {
    productId: "1",
    productName: "Chair",
    cost: "100"
  },
  {
    productId: "2",
    productName: "Table",
    cost: "200"
  },
  {
    productId: "3",
    productName: "Pen",
    cost: "20"
  },
  {
    productId: "4",
    productName: "Book",
    cost: "50"
  },
  {
    productId: "5",
    productName: "EarBuds",
    cost: "300"
  }
];

var userOrders = [
  {
    productId: "6",
    productName: "I-Phone",
    cost: "300000",
    status: "Orderd",
    quantity: 1
  },
  {
    productId: "7",
    productName: "LapTop",
    cost: "100000",
    status: "Orderd",
    quantity: 1
  },
  {
    productId: "8",
    productName: "TV",
    cost: "25000",
    status: "Orderd",
    quantity: 1
  }
];

router.get("/getProducts", (req, res) => {
  try {
    res.json(totalProducts);
  } catch {
    res.json({ message: "Error while ordering" });
  }
});

router.get("/userOrders", (req, res) => {
  try {
    res.json(userOrders);
  } catch {
    res.json({ message: "Error while ordering" });
  }
});

router.post("/orderProduct", (req, res) => {
  try {
    console.log(req.body);
    userOrders.filter(item => {
      if (req.body.productId === item.productId) {
        return item.quantity + 1;
      } else if (req.body.productId !== item.productId) {
        req.body.quantity = 1;
        userOrders.push(req.body);
        return;
      }
    });
    console.log("userOrders", userOrders);
    res.json({ message: "success" });
  } catch {
    res.json({ message: "Error while ordering" });
  }
});

router.post("/cancelOrder", (req, res) => {
  try {
    console.log(req.body);
    userOrders.filter(item => {
      return item.body !== item.productId;
    });
    console.log("userOrders", userOrders);
    res.json({ message: "success" });
  } catch {
    res.json({ message: "Error while cancel ordering" });
  }
});
module.exports = router;
