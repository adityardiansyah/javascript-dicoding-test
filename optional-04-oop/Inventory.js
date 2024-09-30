/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
  
  constructor(){
    this.items = [];
  }

  addItem(item){
    this.items.push(item);
  }

  removeItem(id){
    const data = this.items.map((item) => item.id).indexOf(id);
    this.items.splice(data, 1);
  }

  listItems(){
    return this.items.map((item) => {
      return {
        'ID': item.id, 
        'Name': item.name, 
        'Quantity': item.quantity, 
        'Price': item.price
      };
    })
  }

}

// Jangan hapus kode di bawah ini!
export default Inventory;
