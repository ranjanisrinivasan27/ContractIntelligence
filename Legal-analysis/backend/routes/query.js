// routes/query.js
const express = require('express');

const { GoogleGenerativeAI } = require("@google/generative-ai");
const { searchSimilarChunks } = require('../services/ragService');
const { generateEmbedding } = require('../services/embeddingService');
const router = express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);



router.post('/ask', async (req, res) => {
  try {
    const { question, documentId, isDocumentMode } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'question is required' });
    }

    // If in document mode, require documentId
    if (isDocumentMode && !documentId) {
      return res.status(400).json({ error: 'documentId is required in document mode' });
    }

    let prompt = "";
    let chunks = [];

    if (isDocumentMode) {
      // 1️⃣ Embed the question
      const queryEmbedding = await generateEmbedding(question);

      // 2️⃣ Search within the document
      chunks = await searchSimilarChunks(queryEmbedding, 5, documentId);

      // 3️⃣ Prepare RAG prompt
      const contextText = chunks.map((c, i) => `Reference ${i + 1}: ${c.content}`).join("\n\n");
      prompt = `
You are a helpful assistant.
Use ONLY the provided context to answer the question.
Provide references in the format (Reference X).

Context:
${contextText}

Question: ${question}

Answer:
`;
    } else {
      // Normal mode → No context, just the question
      prompt = `
You are a helpful assistant.
Answer the question directly using your own knowledge.

Question: ${question}

Answer:
`;
    }

    // 4️⃣ Generate answer
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const answerText = result.response.text();

    res.json({
      answer: answerText,
      references: isDocumentMode
        ? chunks.map((c, i) => ({
            referenceNumber: i + 1,
            content: c.content
          }))
        : [] // No references for normal mode
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to answer question' });
  }
});
module.exports = router;
