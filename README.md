

---

````markdown
# ⚖️ Contract Intelligence & Compliance Platform

An AI-powered full-stack application for intelligent legal document analysis, featuring clause classification, risk assessment, compliance checking, contract comparison, and document-based Q&A.

---

## 🚀 Features

- 📄 Secure Document Upload & Processing  
- 🔍 AI-Based Clause Extraction & Classification  
- ⚖️ Risk Assessment & Flagging  
- 📊 Compliance Checking (GDPR, HIPAA, SOX)  
- 💬 Intelligent Contract Q&A  
- 🔄 Contract Comparison  
- 📚 Case Law & Legal Insight Support  
- 🤝 Human-in-the-Loop Feedback System  

---

## 🛠️ Tech Stack

### Frontend
- Next.js 13+
- TypeScript
- Tailwind CSS
- Shadcn UI

### Backend
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Google Generative AI (Gemini)
- Local Embeddings (Transformers)

---

## 📋 Prerequisites

- Node.js 16+
- PostgreSQL 12+
- npm
- pnpm (for frontend)

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ranjanisrinivasan27/ContractIntelligence.git
cd ContractIntelligence
````

---

## ⚙️ Backend Setup

1️⃣ Navigate to backend folder:

```bash
cd backend
```

2️⃣ Install dependencies:

```bash
npm install
```

3️⃣ Create a `.env` file inside the backend folder and add:

```
DATABASE_URL="postgresql://user:password@localhost:5432/legal_docs"
GEMINI_API_KEY="your-gemini-api-key"
PORT=5000
```

4️⃣ Run database migration (if using Prisma):

```bash
npx prisma migrate dev
```

5️⃣ Start the backend server:

```bash
npm start
```

Backend will run at:

```
http://localhost:5000
```

---

## ⚙️ Frontend Setup

1️⃣ Navigate to frontend folder:

```bash
cd frontend
```

2️⃣ Install dependencies:

```bash
pnpm install
```

3️⃣ Start development server:

```bash
pnpm dev
```

Frontend will run at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
ContractIntelligence/
│
├── backend/
│   ├── package.json
│   ├── server.js
│   ├── routes/
│   ├── services/
│   └── prisma/
│
└── frontend/
    ├── app/
    ├── components/
    ├── lib/
    └── public/
```

---

## 🔗 API Endpoints

* POST `/api/documents/upload` → Upload & process documents
* GET `/api/documents/analyses` → Retrieve analysis results
* POST `/api/query/ask` → Contract Q&A
* POST `/api/compare` → Compare contracts
* POST `/api/compliance/:id/check` → Run compliance checks

---

## 🎯 Objective

To automate legal contract review using AI, reduce manual effort, improve compliance accuracy, and provide intelligent insights for legal and business teams.

---

## 🌱 Future Enhancements

* Advanced risk scoring dashboard
* Multi-framework compliance comparison
* Cloud deployment
* Improved AI accuracy
* Role-based access control

---

## 👩‍💻 Developed By

Ranjani S

---

## 📜 License

This project is licensed under the MIT License.

```

---

You can now:

1. Go to your repository  
2. Edit `README.md`  
3. Replace everything  
4. Commit changes  

If you want, I can now help you make it look even more professional with GitHub badges and UI polish 😎
```
