import vision from "@google-cloud/vision";

export const textDetection = async (file: string) => {


  const client = new vision.ImageAnnotatorClient({ keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS });

  // Performs label detection on the image file
  const [result] = await client.textDetection(file);

  if (!result) {
    console.log("textDetection failed");
    return;
  }

  const fullText = result.fullTextAnnotation.text;
  return fullText.split("\n");
};

