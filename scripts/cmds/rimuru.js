const axios = require('axios');

module.exports = {
  config: {
    name: 'rimuru',
    version: '1.0',
    author: 'zach.',
    countDown: 5,
    role: 0,
    shortDescription: 'Ask Rimuru a question',
    longDescription: '',
    category: 'communication',
    guide: {
      en: '{p}{n} <question>',
    }
  },

  onStart: async function ({ message, args, event, api }) {
    const question = args.join(' ');
    const uid = '100064763179341'; // If UID is fixed, otherwise you can make it dynamic

    if (!question) {
      return message.reply(`Please enter in the format:\n/askrimuru <question>`);
    }

    await message.reply('Asking Rimuru, please wait....🧙‍♂️');

    const url = `https://joshweb.click/pai/rimuru?q=${encodeURIComponent(question)}&uid=${uid}`;

    try {
      const response = await axios.get(url);

      if (response.data && response.data.result) {
        message.reply(`Rimuru's answer: ${response.data.result}`);
      } else {
        message.reply('No answer received. Please try again.');
      }
    } catch (error) {
      message.reply('Error while asking Rimuru. Please try again.');
      console.error(error);
    }
  }
};
