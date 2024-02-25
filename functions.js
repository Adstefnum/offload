import axios from 'axios';
// import RNFS from 'react-native-fs';


    const apiKey= "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";


async function transcribeAndSummarize(audioFilePath) {
        // const audioFile = await RNFS.readFile(audioFilePath, 'base64');
        const form = new FormData();
      form.append('file', {
        name: 'audio.mp3',
        type: 'audio/mp3',
        uri: audioFilePath,
      });
        const response = await axios.post(
        'https://api.openai.com/v1/audio/transcriptions',
        form,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      console.log(response);

    var prompt="Summarize this in 50 words or less: " + transcription; 


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