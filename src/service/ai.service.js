const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
});

async function generateCaption(base64ImageFile) {
  const contents = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: base64ImageFile,
      },
    },
    { text: "Caption this image." },
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config: {
      systemInstruction: `You are an expert in generating caption for images.
      you generate multiple caption for the image.
      your caption should be short and concise.
      you use hashtags and emojid in the caption.
      `
    },
  });
  return response.text;
}

module.exports = generateCaption
