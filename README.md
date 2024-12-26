# Stickify - Google Keep Clone

**Stickify** is a clone of Google Keep, where users can create, read, update, and delete notes. Built with the PERN stack (PostgreSQL, Express, React, Node.js), Stickify provides a simple interface to manage your notes efficiently.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Back End Setup](#back-end-setup)
  - [Front End Setup](#front-end-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **PostgreSQL**: Database for storing notes.
- **Express.js**: Backend server for handling API requests.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for the backend.
- **Cors**: Cross-Origin Request Handling for frontend-backend communication.

## Project Structure

```
stickify/
├── backend/           # Backend folder containing Express API
│   ├── controllers/   # Business logic for CRUD operations
│   ├── models/        # PostgreSQL models
│   ├── routes/        # API routes
│   └── server.js      # Backend entry point
└── frontend/          # Frontend folder containing React app
    ├── src/
    │   ├── components/  # UI components like note cards, forms
    │   ├── App.js       # Main React component
    │   └── index.js     # React entry point
    └── public/
        └── index.html   # HTML template
```

## Getting Started

To run **Stickify**, you need to set up both the backend and frontend environments. Follow the steps below for each part.

### Back End Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/stickify.git
   cd stickify/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   - Create a PostgreSQL database and configure your credentials.
   - Create a `.env` file in the `backend` folder and add the following variables:
     ```
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=your_db_user
     DB_PASS=your_db_password
     DB_NAME=stickify_db
     ```

4. **Run the server**:
   ```bash
   npm start
   ```
   The backend server will run on `http://localhost:5000`.

### Front End Setup

1. **Navigate to the frontend folder**:
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the frontend**:
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`.

### Connecting Backend and Frontend

Ensure that your backend API is running and listening on the correct port (usually `5000`), and the frontend will communicate with it.

- In the frontend, make sure that API calls point to `http://localhost:5000` for the backend.

## Usage

Once both the backend and frontend are running:

1. Navigate to `http://localhost:3000` in your browser.
2. Create a new note, edit existing ones, or delete notes.
3. The data will be saved and retrieved from the PostgreSQL database via the Express API.

## Contributing

Feel free to fork the project, make changes, and open a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Let me know if you'd like any changes to the README or need further instructions!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
