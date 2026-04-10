📦 Lost and Found System

A full-stack web application to help users report, search, and recover lost or found items efficiently. The platform connects people who have lost items with those who have found them.

🚀 Features
📝 Report Lost Items
📢 Report Found Items
🔍 Search & Filter Items
🔐 User Authentication (Login/Register with JWT)
👤 User Dashboard
📬 Contact between finder and owner
📊 Status tracking (Lost / Found / Claimed)
📱 Responsive UI (Mobile + Desktop)
🛠️ Tech Stack
Frontend
React.js
Redux Toolkit (if used)
Tailwind CSS / CSS3
Axios
Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
bcrypt.js
📁 Project Structure
lost-and-found/
│
├── client/          # Frontend (React)
├── server/          # Backend (Node + Express)
├── models/          # Database schemas
├── routes/          # API routes
├── controllers/     # Business logic
├── middleware/      # Auth middleware
└── README.md
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/lost-and-found.git
2. Install dependencies
Backend
cd server
npm install
Frontend
cd client
npm install
3. Setup Environment Variables

Create a .env file in server/:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4. Run the project
Start backend
cd server
npm run dev
Start frontend
cd client
npm start
📸 Screenshots
<img width="956" height="514" alt="image" src="https://github.com/user-attachments/assets/975cdf7d-434f-4225-a170-ef943c9c7b56" />


📌 Future Improvements
Real-time chat between users
Email notifications
Image upload for items
Admin panel
Map-based search
🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

📄 License

This project is licensed under the MIT License.

👨‍💻 Author

MD Wasirul
Full Stack Developer
