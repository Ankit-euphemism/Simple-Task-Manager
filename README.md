# Simple Task Manager

Fullstack task manager app with an Express + MySQL backend and a React + TypeScript frontend.

## Project Structure

```text
README.md
backend/
  create-db-template.sql
  index.js
  package.json
  certs/
    global-bundle.pem
  middlewares/
    createTb.js
  models/
    createTable.js
    taskModel.js
    config/
      db.js
frontend/
  index.html
  package.json
  vite.config.ts
  src/
    App.tsx
    index.css
    main.tsx
    components/
      TaskForm.tsx
      TaskItem.tsx
      TaskList.tsx
    services/
      taskApi.ts
    types/
      task.ts
```

## Tech Stack

- Backend: Node.js, Express, mysql2, dotenv, CORS
- Frontend: React 18, TypeScript, Vite
- Database: MySQL

## How It Works

1. Frontend calls REST endpoints in `frontend/src/services/taskApi.ts`.
2. Backend receives requests in `backend/index.js`.
3. Middleware `backend/middlewares/createTb.js` ensures the `tasks` table exists by calling `backend/models/createTable.js`.
4. CRUD SQL queries run through `backend/models/taskModel.js` using the pool in `backend/models/config/db.js`.
5. Results are returned as JSON and rendered in React components.

## API Endpoints

Base path: `/tasks`

- `GET /tasks` - Get all tasks
- `GET /tasks/:id` - Get one task by id
- `POST /tasks` - Create task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

Expected task shape:

```json
{
  "id": 1,
  "title": "Sample task",
  "completed": false
}
```

## Database

Use `backend/create-db-template.sql` to initialize MySQL:

- Creates database `taskmanager`
- Creates table `tasks` with columns:
- `id` `INT` auto-increment primary key
- `title` `VARCHAR(255)`
- `completed` `BOOL` default `false`
- `created` `TIMESTAMP` default current timestamp

## Environment Variables

Create `backend/.env`:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=taskmanager
```

Notes:

- Backend supports both `DB_NAME` and `DB_DATABASE`.
- SSL is optional. If using an SSL CA file, set `DB_SSL_CA` to its path.

## Run Locally

### 1. Install Dependencies

From project root, install each app's dependencies:

```sh
cd backend
npm install

cd ../frontend
npm install
```

### 2. Start Backend

```sh
cd backend
npm run dev
```

Backend runs on `http://localhost:5000` by default.

### 3. Start Frontend

In another terminal:

```sh
cd frontend
npm run dev
```

Vite will print the local frontend URL (commonly `http://localhost:5173`).

## Important Implementation Note

`frontend/src/services/taskApi.ts` currently uses a deployed API URL:

`https://simple-task-manager-1-ct6t.onrender.com/tasks`

If you want frontend to use local backend, change `API_URL` to:

`http://localhost:5000/tasks`

## Available Scripts

Backend (`backend/package.json`):

- `npm start` - Run server with Node
- `npm run dev` - Run server with nodemon

Frontend (`frontend/package.json`):

- `npm run dev` - Start Vite dev server
- `npm run build` - Type check and build production assets
- `npm run preview` - Preview production build
