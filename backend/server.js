const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let restaurants = [
  {
    id: 1,
    name: "ร้านอาหารไทย",
    menu: [
      { id: 1, name: "ผัดกะเพรา", price: 50 },
      { id: 2, name: "ข้าวผัด", price: 45 }
    ]
  }
];

let orders = [];

// ดูร้านอาหารทั้งหมด
app.get("/restaurants", (req, res) => {
  res.json(restaurants);
});

// สั่งอาหาร
app.post("/order", (req, res) => {
  const order = req.body;
  order.id = orders.length + 1;
  order.status = "กำลังจัดเตรียมอาหาร";
  orders.push(order);
  res.json({ message: "สั่งอาหารสำเร็จ", order });
});

// ดูออเดอร์ทั้งหมด
app.get("/orders", (req, res) => {
  res.json(orders);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
