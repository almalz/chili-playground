import vision from '@google-cloud/vision'

export const textDetection = async (file) => {

  // Creates a client
  const client = new vision.ImageAnnotatorClient({ keyFilename: './api/key.json' });

  // Performs label detection on the image file
  const [result] = await client.textDetection(file);

  if (!result) {
    console.log('textDetection failed')
    return;
  }

  const fullText = result.fullTextAnnotation.text;
  return fullText.split('\n');
}

