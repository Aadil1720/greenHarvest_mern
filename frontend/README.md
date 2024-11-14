# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Green Harvest MERN Application

This is a full-stack application built with the MERN stack (MongoDB, Express, React, Node.js). The project provides a platform to manage products, categories, and farmers for a green harvest application.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### 1. Clone the Repository

First, clone the project repository to your local machine:

```bash
git clone https://github.com/Aadil1720/greenHarvest_mern.git
cd greenHarvest_mern

2.1. Navigate to the backend directory
cd backend

2.2. Install Backend Dependencies
npm install

2.3. Set Up Environment Variables
MONGODB_URI=mongodb://localhost:27017/greenharvest  # Replace with your MongoDB URI
PORT=5000

2.4. Start the Backend Server
node server.js

3. Setup Frontend

3.1. Navigate to the frontend directory
cd ../frontend

3.2. Install Frontend Dependencies
npm install

3.3. Configure the API Endpoint
Ensure that the frontend is correctly pointing to the backend API. In your frontend code, modify the API URL (typically in service or API call files) to:
const API_URL = "http://localhost:5000";  // or wherever your backend is running

3.4. Run the Frontend Development Server
npm start



