# Auth App (Full Stack JWT Authentication)

A full-stack **authentication project** built with:

### 💻 Technologies
- **Frontend:** React (React Router, Fetch, functional components)
- **Backend:** Node.js + Express
- **Database:** MongoDB Atlas (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Routing:** Protected routes

---

## 🚀 Features

✔ User Signup  
✔ User Login  
✔ JWT Authentication  
✔ Protected Dashboard route  
✔ LocalStorage token handling  
✔ Clean architecture  
✔ Polished UI with CSS + spinners + reusable components

---

authvault/
├── auth-frontend/ # React app
├── config/ # Backend config
├── models/ # Mongoose schemas
├── routes/ # API endpoints
├── middleware/ # Auth middleware
├── .gitignore
├── README.md



---

## 🧠 How It Works

1. **Signup** → Creates user in MongoDB  
2. **Login** → Returns JWT token  
3. **Frontend** saves token to `localStorage`  
4. **Protected Routes** block access without valid token  
5. **Dashboard** shows secure content

---

## ⚡ Get Started — Run Locally

### 🛠 Backend
```bash
cd authvault
npm install
npm start

To make it *pop*, add screenshots of:

🟡 Login page  
🟢 Signup page  
🔒 Protected dashboard

## 📁 Project Structure

