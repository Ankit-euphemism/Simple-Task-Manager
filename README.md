# Simple Task Manager App

A fullstack CRUD task manager application with a MySQL backend and a simple HTML/CSS/JS frontend.

## Project Structure

```
.gitignore
create-db-template.sql
README.md
.vscode/
  settings.json
backend/
  .env
  index.js
  package.json
  models/
    taskModel.js
    config/
      db.js
frontend/
  index.html
  css/
    style.css
  js/
    script.js
```

## Technologies Used

- **Backend:** Node.js, Express, MySQL2, dotenv, CORS
- **Frontend:** HTML, CSS, JavaScript
- **Database:** MySQL

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repo-url>
cd task-mananger-app(fullstack)
```

### 2. Set Up the Database

- Create a MySQL database named `taskmanager`.
- Run the SQL script in [`create-db-template.sql`](create-db-template.sql) to create the `tasks` table.

### 3. Configure Environment Variables

- Edit [`backend/.env`](backend/.env) with your MySQL credentials.

### 4. Install Backend Dependencies

```sh
cd backend
npm install
```

### 5. Start the Backend Server

```sh
npm start
```
The server runs on `http://localhost:5000`.

### 6. Open the Frontend

- Open [`frontend/index.html`](frontend/index.html) in your browser.

## Features

- Add, view, update, and delete tasks.
- Tasks are stored in a MySQL database.
- Simple UI for task management.

## Notes

- The backend API endpoints are defined in [`backend/index.js`](backend/index.js).
- Database connection is configured in [`backend/models/config/db.js`](backend/models/config/db.js).
- Frontend logic is in [`frontend/js/script.js`](frontend/js/script.js).

---