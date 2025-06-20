# 🔗 URL Shortener (MERN Stack)

A simple and efficient URL shortener web application built with the **MERN Stack** – MongoDB, Express.js, React.js, and Node.js. It allows users to shorten long URLs, track their usage, and manage them through a secure dashboard.

---

## 🚀 Features

- 🔗 Shorten long URLs instantly
- 📊 Track how many times a short URL has been visited
- 🧑‍💼 User authentication using JWT
- 🗃️ Dashboard to manage (create/update/delete) your URLs
- 🌐 Redirect short links to original URLs
- 📱 Fully responsive and mobile-friendly design

---

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Authentication**: JSON Web Tokens (JWT)
- **Short ID Generation**: nanoid / shortid
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/url-shortener-mern.git
cd url-shortener-mern
```

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `/backend` directory with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
BASE_URL=http://localhost:5000
```

Start the backend server:

```bash
npm run dev
```

### 3. Set Up the Frontend

Open a new terminal and run:

```bash
cd frontend
npm install
```

If needed, create a `.env` file in `/frontend` with:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm start
```

Now, go to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Usage

1. Sign up or log in
2. Enter a long URL and click **Shorten**
3. Get a short URL that redirects to the original link
4. Track click counts
5. Manage your URLs from your dashboard

---

## 📁 Folder Structure

```
url-shortener-mern/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│
└── README.md
```

---

## 🧰 Dependencies (Key Packages)

### Backend

- express
- mongoose
- jsonwebtoken
- cors
- dotenv
- nanoid or shortid
- bcryptjs

### Frontend

- react
- axios
- react-router-dom
- tailwindcss

---

## 🌐 Deployment

- **Frontend**: Deploy on [Vercel](https://vercel.com/)
- **Backend**: Deploy on [Render](https://render.com/) or [Heroku](https://heroku.com/)
- Ensure both are connected and environment variables are properly configured.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

Developed by [Junaid Sadiq](https://github.com/photonGi)
