İşte içeriğinizi profesyonel bir şekilde biçimlendirilmiş bir **GitHub README.md** dosyasına dönüştürdüm:

---

```markdown
# 🧩 Task Tracker - Frontend

This is the **React-based frontend** for the Task Tracker application. It allows users to **create**, **view**, and **delete tasks**. It communicates with a **FastAPI** backend API.

---

## 📁 Project Structure

```

task-tracker-frontend/
├── public/
│   └── index.html               # HTML template for the frontend
├── src/
│   ├── App.js                   # Main application logic
│   ├── TaskList.js              # (Optional) Task list component
│   ├── index.js                 # React app entry point
│   └── index.css                # Application styles
├── Dockerfile                   # Docker configuration
├── package.json                 # Project dependencies
├── package-lock.json            # Dependency lock file
└── .github/
└── workflows/
└── deploy.yml           # GitHub Actions CI/CD pipeline

````

---

## 🧪 Local Development

To run the frontend locally using **Node.js**:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/task-tracker-frontend.git
cd task-tracker-frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
````

The application will be available at:
👉 [http://localhost:3000](http://localhost:3000)

Ensure the backend (FastAPI) is running at:
👉 [http://localhost:8000/tasks/](http://localhost:8000/tasks/)

---

## 🐳 Docker Instructions

### 🔧 1. Build Docker Image

```bash
docker build -t yourdockerhubuser/task-tracker-frontend:2.0.0 .
```

### ▶️ 2. Run Container

```bash
docker run -d -p 3000:3000 yourdockerhubuser/task-tracker-frontend:2.0.0
```

### ☁️ 3. Push to Docker Hub

```bash
# Login to Docker Hub
docker login

# Push image
docker push yourdockerhubuser/task-tracker-frontend:2.0.0

# Optionally tag as latest
docker tag yourdockerhubuser/task-tracker-frontend:2.0.0 yourdockerhubuser/task-tracker-frontend:latest
docker push yourdockerhubuser/task-tracker-frontend:latest
```

---

## ⚙️ GitHub Actions - CI/CD Pipeline

This project includes a **CI/CD workflow** using GitHub Actions that automatically builds and pushes a Docker image to Docker Hub whenever changes are pushed to the `main` branch.

### ✅ Workflow Steps

* Check out the latest code from the repo
* Log into Docker Hub using GitHub Secrets
* Build the Docker image
* Push the image to Docker Hub

### 🔐 Required GitHub Secrets

Go to your repo → **Settings** → **Secrets** → **Actions**, and add the following:

* `DOCKER_USERNAME`
* `DOCKER_PASSWORD`

