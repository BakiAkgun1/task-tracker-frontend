# 🧩 Task Tracker - Frontend

This is the **React-based frontend** for the Task Tracker application. It allows users to create, view, and delete tasks. It communicates with a backend API built with FastAPI.

---

## 📁 Project Structure

task-tracker-frontend/
├── public/
│ └── index.html # Main HTML template
├── src/
│ ├── App.js # Main React component
│ ├── TaskList.js # (Optional) Task list component
│ ├── index.js # App entry point
│ └── index.css # Basic styles
├── Dockerfile # Docker configuration
├── package.json # Project dependencies
└── .github/workflows/
└── deploy.yml # GitHub Actions workflow


---
## 🛠️ Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-tracker-frontend.git
   cd task-tracker-frontend
Install dependencies:


npm install
Run the development server:

bash
Copy
Edit
npm start
Open the app in your browser:

arduino
Copy
Edit
http://localhost:3000
The app fetches data from the backend API (default: http://localhost:8000/tasks/).

🐳 Running with Docker
1. Build the Docker image
bash
Copy
Edit
docker build -t yourdockerhubuser/task-tracker-frontend:2.0.0 .
2. Run the container
bash
Copy
Edit
docker run -d -p 3000:3000 yourdockerhubuser/task-tracker-frontend:2.0.0
3. Push to Docker Hub
bash
Copy
Edit
docker login
docker push yourdockerhubuser/task-tracker-frontend:2.0.0
(Optional: push with latest tag)

bash
Copy
Edit
docker tag yourdockerhubuser/task-tracker-frontend:2.0.0 yourdockerhubuser/task-tracker-frontend:latest
docker push yourdockerhubuser/task-tracker-frontend:latest
🔁 GitHub Actions CI/CD
GitHub Actions automatically builds and pushes the image to Docker Hub whenever code is pushed to the main branch.

Workflow: .github/workflows/deploy.yml
Checks out the code

Logs into Docker Hub (via secrets)

Builds the Docker image

Pushes it to Docker Hub

Required Secrets
Go to your GitHub repository → Settings → Secrets → Actions, and add:

DOCKER_USERNAME

DOCKER_PASSWORD

