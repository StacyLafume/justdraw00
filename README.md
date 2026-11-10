# Just Draw

A full-stack drawing application for taking a creative break. Create an account, draw on a canvas, save your work, and explore other users’ drawings.

## Live Demo

https://justdraw00.onrender.com/

## Screenshot

![Just Draw screenshot](public/JustDraw-logo/Screen%20Shot%202019-08-18%20at%208.46.47%20PM.png)

## Features

- Account registration and login
- Interactive drawing canvas
- Save, edit, and delete drawings
- Personal profiles and a shared drawing feed

## Tech Stack

JavaScript, HTML, CSS, EJS, p5.js, Node.js, Express,
MongoDB, Mongoose, Passport, and bcrypt.

Hosted on Render with MongoDB Atlas.

## Run Locally

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/StacyLafume/justdraw00.git
   cd justdraw00
   npm install
   ```

2. Create a `.env` file in the project root:

   ```dotenv
   USER_NAME=your_database_username
   USER_PASSWORD=your_database_password
   DB_NAME=your_database_name
   PORT=8081
   ```

   Never commit real credentials. Enter the original password;
   credentials are passed separately from the connection URL.

3. In `config/database.js`, replace the cluster hostname with
   your own MongoDB Atlas cluster hostname.

4. Configure your Atlas database user and allow your machine’s
   IP address in the Atlas IP Access List.

5. Start the application:

   ```bash
   npm run dev
   ```

6. After the database connects, open http://localhost:8081/.

## Project Status

Restored to service in November 2026. This application uses
legacy dependencies. Dependency updates, persistent session
storage, and moving the session secret into environment
configuration remain follow-up improvements.

## License

See [LICENSE](LICENSE).
