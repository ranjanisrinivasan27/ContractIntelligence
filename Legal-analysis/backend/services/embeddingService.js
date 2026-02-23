// services/embeddingService.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateEmbedding(text) {
  const model = genAI.getGenerativeModel({ model: "embedding-001" });
  
  const res = await model.embedContent(text);

  // Google returns { embedding: { values: [ ... ] } }
  return res.embedding.values;
}

module.exports = { generateEmbedding };
