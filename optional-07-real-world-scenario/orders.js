// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const totalPrice = items.reduce((acc, val) => acc + val.price, 0);
  const data = {
    'id': generateUniqueId(),
    'costumerName': customerName,
    'items': items,
    'totalPrice': totalPrice,
    'status': 'Menunggu'
  };
  orders.push(data);
  return orders;
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.filter(val => {
    if(val.id === orderId){
      return val;
    }
  });
  
  order[0].status = status;
  return order;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const order = orders.filter(val => {
    if(val.status === 'Selesai'){
      return val;
    }
  });
  return order.reduce((acc, num) => acc + num.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const data = orders.filter(val => {
    if(val.id === id){
      return val;
    }
  });
  orders.splice(data, 1);
}

export {
  orders,
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};
