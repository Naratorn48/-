function loadRestaurants() {
  fetch("http://localhost:3000/restaurants")
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach(r => {
        html += `<h2>${r.name}</h2>`;
        r.menu.forEach(m => {
          html += `
            <p>${m.name} - ${m.price} บาท
            <button onclick="orderFood('${m.name}')">สั่ง</button></p>`;
        });
      });
      document.getElementById("restaurants").innerHTML = html;
    });
}

function orderFood(menuName) {
  fetch("http://localhost:3000/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      menu: menuName,
      customer: "ลูกค้าทดสอบ"
    })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}
