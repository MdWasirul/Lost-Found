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
Screenshots:1
<img width="1894" height="988" alt="Screenshot 2026-04-18 223245" src="https://github.com/user-attachments/assets/3c85d1b4-bd41-499f-a010-610021fbe1b0" />
Screenshots:2
<img width="1254" height="849" alt="Screenshot 2026-04-18 223303" src="https://github.com/user-attachments/assets/575b1b63-775b-42e2-a754-b52a36993cd5" />

<img width="944" height="774" alt="Screenshot 2026-04-18 223315" src="https://github.com/user-attachments/assets/40360d01-f357-4422-8ebf-168958ea1038" />


<img width="1511" height="847" alt="Screenshot 2026-04-18 223406" src="https://github.com/user-attachments/assets/6a39062c-6b28-421a-8c4c-1b2038d5092f" />

<img width="1601" height="870" alt="Screenshot 2026-04-18 223427" src="https://github.com/user-attachments/assets/5ad5a660-e6a7-4176-b201-8d3330cb0980" />

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
