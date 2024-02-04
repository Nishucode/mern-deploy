This repository contains the setup for a MERN (MongoDB, Express.js, React, Node.js) stack project.
**Initialize a new Node.js project:**
Follow these steps:
                 mkdir root_directory_name
                 cd root_directory_name
                 npm init -y

**Install necessary packages:**
                 npm install express mongoose body-parser cors nodemailer dotenv
                 npm install --save-dev nodemon
(express for the server.
mongoose for MongoDB interaction.
body-parser to parse incoming request bodies.
cors to enable CORS.
nodemailer for sending emails.
dotenv for managing environment variables.
nodemon for automatically restarting the server during development.)


**Server-side Setup**
1) Clone this repository to your local machine:
                   git clone https://github.com/yourusername/mern-setup.git
2) Navigate to the project directory:
                         cd mern-setup
3) Install backend dependencies:
                 npm install express mongoose body-parser cors dotenv
4) Start the backend server:
                            npm start

**MongoDB**
This project uses MongoDB as the database. Ensure you have MongoDB installed on your system or use MongoDB Atlas for cloud hosting.
**Set up your MongoDB database:**
1) Use MongoDB Atlas or a local MongoDB server.
2) Create a new database, e.g., userNotificationDB.
3) Obtain your connection string.
   
**Environment Variables (.env)**
Create a .env file in the root directory of your project. Add the following environment variables:
                                  DATABASE_URL=your_mongodb_connection_string
Replace your_mongodb_connection_string with your actual MongoDB connection string.


**Client-side Setup**
Create a React App:
             npx create-react-app client
1) Navigate to the client directory:            
                    cd client
2) Install frontend dependencies:
               npm install react react-dom react-scripts
3) Start the frontend development server:
                     npm start
Open your web browser and go to http://localhost:3000 to access the application.





