## 🚀 PulseOps – Service Health & Incident Monitoring Platform

**PulseOps** is a production-minded demo platform designed to showcase **real-world DevOps architecture**, not just application code.

It demonstrates how a frontend, backend, reverse proxy, and infrastructure automation work together in a clean, scalable way.

---

## 🎯 Project Purpose

This project was built to demonstrate:

* How modern web applications are **deployed**, not just written
* Clear separation between **Frontend**, **Backend**, and **Ingress**
* Internal service communication using Docker networking
* Reverse proxy patterns using Nginx
* Dev vs Production-like deployment mindset

> This is a **concept demo**, not a SaaS product — the focus is architecture and lifecycle understanding.

---

## 🧱 Architecture Overview

```
User Browser
     |
     v
Nginx (Frontend Container) :80
     |
     ├── /        → React SPA (Static Files)
     └── /api     → Backend API
                    |
                    v
               Node.js Backend :5000
```

### Key Architectural Decisions

* **Single entry point** (Nginx)
* Backend is **internal only**
* No direct backend exposure to the host
* Clean reverse-proxy routing

---

## 🛠 Tech Stack

### Frontend

* Vite + React
* SPA (Single Page Application)
* Built using multi-stage Docker build
* Served via Nginx

### Backend

* Node.js + Express
* Stateless API
* Background health-check worker
* In-memory service registry (demo scope)

### Infrastructure

* Docker
* Docker Compose (Dev & Prod-like)
* Nginx Reverse Proxy
* Internal Docker networking

---

## 🔍 Core Features

* Register services for monitoring
* Periodic health checks
* Service status tracking (UP / DEGRADED / DOWN)
* Incident detection on status changes
* Real-time dashboard visualization

---

## 🐳 Deployment Strategy

### Development

* Separate containers
* Easy iteration
* Fast feedback

### Production-like Demo

* Frontend container exposes port **80**
* Backend container exposed **internally only**
* All traffic routed through Nginx
* Docker DNS used for service discovery

```yaml
backend:
  expose:
    - "5000"

frontend:
  ports:
    - "80:80"
```

This mirrors real production patterns without overengineering.

---

## 🧠 Why This Matters

Many demos focus on *what* an app does.
**PulseOps focuses on how it runs.**

This project demonstrates:

* Infrastructure awareness
* Deployment thinking
* Security-first exposure
* Scalable mental models

---

## 🚦 Scope & Limitations

* No persistence (in-memory storage)
* No authentication
* No auto-scaling
* No monitoring stack (Prometheus, etc.)

These are **intentional omissions** to keep the demo focused and clear.

---

## 📌 Future Improvements (Optional)

* Persistent storage (SQLite / external DB)
* Metrics export
* Alerting integrations
* CI/CD pipeline

---

## 👨‍💻 Author

Built as a hands-on DevOps architecture demo to showcase **system design and deployment clarity**..
