const axios = require('axios');

module.exports = {
  config: {
    name: 'ainz',
    version: '1.0',
    author: 'zach.',
    countDown: 5,
    role: 0,
    shortDescription: 'Ask Ainz a question',
    longDescription: '',
    category: 'communication',
    guide: {
      en: '{p}{n} <question>',
    }
  },

  onStart: async function ({ message, args, event, api }) {
    const question = args.join(' ');
    const character = 'Ainz Ooal Gown';
    const uid = '100';

    if (!question) {
      return message.reply(`Please enter in the format:\n/askainz <question>`);
    }

    await message.reply('Asking Ainz, please wait....🧙‍♂️');

    const url = `https://joshweb.click/cai/chat?q=${encodeURIComponent(question)}&character=${encodeURIComponent(character)}&uid=${uid}`;

    try {
      const response = await axios.get(url);

      if (response.data && response.data.result) {
        message.reply(`Ainz's answer: ${response.data.result}`);
      } else {
        message.reply('No answer received. Please try again.');
      }
    } catch (error) {
      message.reply('Error while asking Ainz. Please try again.');
      console.error(error);
    }
  }
};
