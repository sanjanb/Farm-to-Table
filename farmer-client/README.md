# 🌾 Farm to Table - Farmer Client

The *Farm to Table* application allows farmers to connect directly with consumers, enabling them to list products and manage their sales efficiently.

## 📖 Overview

This repository contains the front-end code for the Farmer Client of the *Farm to Table* application, built with React. Farmers can register, log in, and manage their product listings through a user-friendly interface.

## 🌟 Features

- **Farmer Registration**: Farmers can create an account and register their details.
- **Farmer Login**: Registered farmers can log in to manage their products.
- **Product Management**: Farmers can add, update, and delete their products.

## 🚀 Getting Started

Follow these steps to set up the Farmer Client on your local machine.

### **Prerequisites**

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### **Installing Dependencies**

1. Clone this repository:

   ```bash
   git clone https://github.com/sanjanb/farmer-client.git
   cd farmer-client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### **Environment Variables**

Create a `.env` file in the root directory of the project and add the following environment variables:

```plaintext
REACT_APP_API_URL=http://localhost:5000/api
```

- `REACT_APP_API_URL`: This is the base URL for your back-end API.

### **Running the Application**

To start the development server, run:

```bash
npm start
```

The app will be available at `http://localhost:3000`.

## 📜 API Endpoints

The Farmer Client communicates with the following API endpoints:

### **Authentication**

- `POST /api/auth/register`: Register a new farmer.
- `POST /api/auth/login`: Login a farmer.

### **Products**

- `POST /api/products`: Add a new product.
- `GET /api/products`: Get all products for farmers.
- `GET /api/products/:id`: Get a specific product by ID.
- `PUT /api/products/:id`: Update a product.
- `DELETE /api/products/:id`: Delete a product.

## 🛠 Technologies Used

- **Front-end**: React, Axios, React Router
- **Back-end**: Node.js, Express, MongoDB

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## 🧑‍💻 Authors

- **Your Name** – [GitHub Profile](https://github.com/sanjanb)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
