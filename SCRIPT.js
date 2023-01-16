// let users = [
//     {
//         "firstName": "Eli",
//         "lastName": "Rotenberg",
//         "password": "321321",
//         "nick": "eroten"
//     },
//     {
//         "firstName": "Nadav",
//         "lastName": "Bar On",
//         "password": "1qa2ws3ed",
//         "nick": "Nadavbar"
//     },
//     {
//         "firstName": "Nikolay",
//         "lastName": "Okhman",
//         "password": "aaaa",
//         "nick": "Nick"
//     }
// ];
// localStorage.setItem('usersStorage', JSON.stringify(users));
// class Render {
//     #users;
//     constructor() {
//         this.#users = JSON.parse(localStorage.getItem('usersStorage'));
//     }
//     renderHTML() {
//         this.#users.forEach((user)=>{
//             let newContainer = document.createElement('div');
//             let leftSide = document.createElement('div');
//             let rightSide = document.createElement('div'); //create different divs. 
    
//             newContainer.setAttribute('class','newContainer');
//             leftSide.setAttribute('class','leftSide');
//             rightSide.setAttribute('class','rightSide'); //define classes for each div.
    
//             let text1 = document.createTextNode(`First name: ${user.firstName}, Surname: ${user.lastName}`);
//             let text2 = document.createTextNode(`Password: ${user.password}, Nickname: ${user.nick}`); //define the texts.

//             leftSide.appendChild(text1);
//             rightSide.appendChild(text2); //inserting the texts into the divs.

//             newContainer.appendChild(leftSide);
//             newContainer.appendChild(rightSide); //inserting the small divs into a bigger one.

//             document.body.appendChild(newContainer);
//         });

//     }
// }

// let newUsers = new Render();
// newUsers.renderHTML();

class Product {
  price;
  productName;
  expDate;
  constructor(inputPrice, inputProductName, inputExpDate) {
    this.price = inputPrice;
    this.productName = inputProductName;
    this.expDate = inputExpDate;
  }
}

class Shop {
  products;
  constructor() {
    this.products = [];
    this.readMethod();
  }
  addProduct(product) {
    //prevent copies in non-ideal test:
    // if(!this.products.includes(product)) {
    this.products.push(product);
    this.saveCreateArray();
    // }
  }
  saveCreateArray() {
    localStorage.setItem("products", JSON.stringify(this.products));
  }
  readMethod() {
    if (localStorage.getItem("products") != null) {
      //if 'products' were found on the pc...
      this.products = JSON.parse(localStorage.getItem("products"));
    } else {
      //otherwise...
      this.saveCreateArray();
    }
  }
}

let vegShop = new Shop();
//non-ideal test:
// let tomato = new Product(10, 'Tomato', 10102222);
// let cucumber = new Product(15, 'Cucumber', 10102222);
// vegShop.addProduct(tomato);
// vegShop.addProduct(cucumber);
//ideal test:
document.getElementById("addProduct").addEventListener("click", () => {
  let price = document.getElementById("price").value;
  let productName = document.getElementById("productName").value;
  let expDate = document.getElementById("expDate").value;
  let newProduct = new Product(price, productName, expDate);
  vegShop.addProduct(newProduct);
});