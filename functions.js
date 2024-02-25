import axios from 'axios';
import * as FileSystem from 'expo-file-system';


async function transcribeAndSummarize(audioFilePath) {
       try {
    // Read the file as a Base64-encoded string
    const base64Audio = await FileSystem.readAsStringAsync(audioFilePath, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Prepare the headers for the request
    const headers = {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json', // This might need to be adjusted based on the API's requirements
    };

    // Prepare the body. Adjust the structure as needed for the API.
    // This is an example assuming the API can handle Base64 directly or you handle conversion on the server.
    const body = {
      file: base64Audio,
      model: 'whisper-1',
      response_format: 'text'
    };

    // Send the request
    const response = await axios.post('https://api.openai.com/v1/audio/transcriptions', body, { headers });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error uploading file:', error);
  } 

    var prompt="Summarize this in 50 words or less: " + response; 


const textresponse = await axios.post(
  'https://api.openai.com/v1/chat/completions',

  {
    'model': 'gpt-4-0125-preview',
    'messages': [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": prompt},
  ],
  },
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey,
    }
  }
);

console.log(textresponse.data.choices[0].message.content);
}


export { transcribeAndSummarize };