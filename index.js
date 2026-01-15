import { KokoroTTS } from "kokoro-js";

// github repo
// https://github.com/hexgrad/kokoro/tree/main/kokoro.js

async function main() {
  // 1. Load the model
  const tts = await KokoroTTS.from_pretrained(
    "onnx-community/Kokoro-82M-v1.0-ONNX",
    {
      device: "cpu", // Node.js
      dtype: "q4",
      //   dtype: "fp32", // slow + very good quality
      //   dtype: "q8", // balanced speed + quality
    }
  );

  // 2. Generate speech
  const audio = await tts.generate(
    `As VinitaSri says, setting an intention begins with clarity
    and focus on what you truly desire to embody in your life.
    Reflect on your values and what resonates deeply within you.
    Write down your intention in a positive and present-tense format, 
    as if it is already happening. For example, instead of saying, 
    "I want to be abundant," say, "I am living in abundance." 
    This aligns your energy with your intention, 
    allowing the universe to respond more effectively.
     Embrace this practice with devotion and surrender, 
     trusting that your clear intention will guide your 
     actions and experiences. Would you like to explore 
     more about intentions or related practices?`,
    {
      //   voice: "af_heart",
      //   voice: "am_adam",
      //   voice: "af_sky",
      //   voice: "am_echo",
      // voice: "af_sarah",
      // voice: "bf_emma",
      voice: "bf_isabella",
    }
  );

  // 3. Save audio
  audio.save("output.wav");

  console.log("✅ Audio saved as output.wav");
}

main();
