# 🧩 Task Tracker - Frontend

This is the **React-based frontend** for the Task Tracker application. It allows users to create, view, and delete tasks. It communicates with a backend API built using FastAPI.

---

## 📁 Project Structure

task-tracker-frontend/
├── public/
│ └── index.html # HTML template for the frontend
├── src/
│ ├── App.js # Main application logic
│ ├── TaskList.js # (Optional) task list component
│ ├── index.js # React app entry point
│ └── index.css # Application styles
├── Dockerfile # Docker configuration for containerizing the app
├── package.json # Project dependencies
├── package-lock.json # Dependency lock file
└── .github/
└── workflows/
└── deploy.yml # GitHub Actions CI/CD pipeline

yaml
Copy
Edit

---

## 🧪 Local Development

To run the frontend locally using Node.js:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/task-tracker-frontend.git
cd task-tracker-frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
The application will be available at:
👉 http://localhost:3000

Make sure the backend (FastAPI) is running at:
👉 http://localhost:8000/tasks/

🐳 Docker Instructions
🔧 1. Build Docker Image
bash
Copy
Edit
docker build -t yourdockerhubuser/task-tracker-frontend:2.0.0 .
▶️ 2. Run Container
bash
Copy
Edit
docker run -d -p 3000:3000 yourdockerhubuser/task-tracker-frontend:2.0.0
☁️ 3. Push to Docker Hub
bash
Copy
Edit
# Login to Docker Hub
docker login

# Push image
docker push yourdockerhubuser/task-tracker-frontend:2.0.0

# Optionally tag as latest
docker tag yourdockerhubuser/task-tracker-frontend:2.0.0 yourdockerhubuser/task-tracker-frontend:latest
docker push yourdockerhubuser/task-tracker-frontend:latest
⚙️ GitHub Actions - CI/CD Pipeline
This project includes a CI/CD workflow that automatically builds and pushes a Docker image to Docker Hub whenever changes are pushed to the main branch.

✅ What the workflow does:
Checks out the latest code from the repo

Logs into Docker Hub using GitHub Secrets

Builds the Docker image

Pushes the image to Docker Hub

🔐 Required GitHub Secrets
Go to your repo → Settings → Secrets → Actions, and add the following:

DOCKER_USERNAME

DOCKER_PASSWORD
