process.env.HF_HUB_DISABLE_XET = "1";

import express from "express";
import { KokoroTTS } from "kokoro-js";
import fs from "fs";

const app = express();
app.use(express.json());

const tts = await KokoroTTS.from_pretrained(
  "onnx-community/Kokoro-82M-v1.0-ONNX",
  { device: "cpu", dtype: "q8" }
);

app.post("/tts", async (req, res) => {
  const { text } = req.body;

  res.setHeader("Content-Type", "audio/wav");
  res.setHeader("Transfer-Encoding", "chunked");

  const audio = await tts.generate(text, { voice: "af_heart" });

  // Send audio buffer directly
  res.send(Buffer.from(audio.audio));
});

app.listen(3000, () => {
  console.log("🎧 TTS server running on port 3000");
});
