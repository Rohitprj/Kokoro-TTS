import { KokoroTTS } from "kokoro-js";

async function main() {
  // 1. Load the model
  const tts = await KokoroTTS.from_pretrained(
    "onnx-community/Kokoro-82M-v1.0-ONNX",
    {
      device: "cpu", // Node.js
      dtype: "q8", // balanced speed + quality
    }
  );

  // 2. Generate speech
  const audio = await tts.generate(
    "Hello Rohit, welcome to your AI application! it is working now you can integrate it in you site",
    {
      //   voice: "af_heart",
      //   voice: "am_adam",
      voice: "af_sky",
      //   voice: "am_echo",
      //   voice: "af_sarah",
      //   voice: "af_sarah",
      //   voice: "af_sarah",
    }
  );

  // 3. Save audio
  audio.save("output.wav");

  console.log("✅ Audio saved as output.wav");
}

main();
