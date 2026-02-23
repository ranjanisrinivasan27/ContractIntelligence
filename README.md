Legal Document Analysis Platform
A full-stack application for AI-powered legal document analysis, featuring clause classification, risk assessment, compliance checking, and intelligent document Q&A.

Features
📄 Document Upload & OCR
🔍 Clause Analysis & Classification
⚖️ Risk Assessment
📊 Compliance Checking (GDPR, HIPAA, SOX)
💬 Document Q&A with LawGPT
🔄 Contract Comparison
📚 Case Law Search
🤝 Human-in-the-Loop Feedback
Tech Stack
Frontend
Next.js 13+
TypeScript
Tailwind CSS
Shadcn UI Components
Backend
Node.js/Express
PostgreSQL
Prisma ORM
Google Generative AI (Gemini)
Local Embeddings (Xenova/transformers)
Prerequisites
Node.js 16+
PostgreSQL 12+
pnpm (for frontend)
npm (for backend)
Installation
1. Clone the repository
git clone https://github.com/Nithya-0705/AI-Based-Contract-Intelligence-And-Compliance-Suite.git
cd source code
2. Backend Setup
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env
Update .env with your credentials:

DATABASE_URL="postgresql://user:password@localhost:5432/legal_docs"
GEMINI_API_KEY="your-gemini-api-key"
PORT=5000
Initialize database:

# Run Prisma migrations
npx prisma migrate dev

# Start backend server
npm start
3. Frontend Setup
cd ../legal-docs-analyzer

# Install dependencies
pnpm install

# Start development server
pnpm dev
Project Structure
├── backend/
│   ├── prisma/            # Database schema and migrations
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   └── utils/             # Helper functions
│
└── legal-docs-analyzer/
    ├── app/              # Next.js pages
    ├── components/       # React components
    ├── lib/             # Utilities
    └── public/          # Static assets
API Routes
POST /api/documents/upload - Upload and process documents
GET /api/documents/analyses - Get analysis results
POST /api/query/ask - Document Q&A
POST /api/compare - Compare documents
POST /api/compliance/:documentId/check - Run compliance checks
Environment Variables
Backend (.env)
DATABASE_URL="postgresql://user:password@localhost:5432/legal_docs"
GEMINI_API_KEY="your-gemini-api-key"
PORT=5000
Frontend (.env)
NEXT_PUBLIC_API_URL="http://localhost:5000"
Contributing
Fork the repository
Create a feature branch
Commit changes
Push to branch
Open a Pull Request
License
MIT License
