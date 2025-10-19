[README.md](https://github.com/user-attachments/files/22988391/README.md)
# 🛍️ Product Management REST API

A simple and secure **RESTful API** built with **Node.js**, **Express**, and **MongoDB** for managing product data.  
Includes CRUD operations, graceful shutdown, and security enhancements using Helmet.

---

## 🚀 Features

✅ Create, Read, Update, and Delete products  
✅ Environment-based configuration with **dotenv**  
✅ Secure HTTP headers using **helmet**  
✅ Graceful shutdown on process termination (SIGINT, SIGTERM)  
✅ Clean MVC structure (Routes, Controllers, Models)  
✅ Built with async/await and proper error handling  

---

## 🏗️ Project Structure

```
project/
│
├── controllers/
│   └── product.js
│
├── models/
│   └── product.js
│
├── routes/
│   ├── home.js
│   └── product.js
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/product-api.git
cd product-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create a `.env` file
```env
PORT=5000
MONGO_URI=mongodb+srv://yourMongoURI
```

### 4️⃣ Start the server
```bash
npm start
```

Server will run at:  
👉 **http://localhost:5000**

---

## 📡 API Endpoints

### **Base URL:** `/product/api/products`

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| POST   | `/`                    | Create a new product     |
| GET    | `/`                    | Get all products         |
| GET    | `/:id`                 | Get product by ID        |
| PUT    | `/:id`                 | Update product by ID     |
| DELETE | `/:id`                 | Delete product by ID     |

---

## 🧩 Example Request (POST)

```bash
POST /product/api/products
Content-Type: application/json

{
  "name": "Wireless Mouse",
  "price": 29.99,
  "description": "Ergonomic wireless mouse"
}
```

---

## 🔒 Security & Best Practices

- Uses **helmet** for setting secure HTTP headers  
- Gracefully closes MongoDB and server on shutdown  
- Uses async/await and proper try/catch handling  
- Environment variables managed via `.env`  

---

## 🧠 Future Improvements

- Add request validation using **Joi** or **express-validator**  
- Implement authentication (JWT)  
- Add pagination and search filters  
- Unit tests with Jest or Mocha  

---

## 👨‍💻 Author

**Ally A. Ngonyani**  
📧 ally.a.ngonyany36@gmail.com
💻 [Your GitHub Profile]
