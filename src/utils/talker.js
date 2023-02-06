const fs = require('fs').promises;
const { join } = require('path');

const readFile = async () => {
  const path = '../talker.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return error.message;
  }
};

const writeFile = async (content) => {
  const path = '../talker.json';
  try {
    const completePath = join(__dirname, path);
    await fs.writeFile(completePath, JSON.stringify(content));
  } catch (e) {
    console.error('Erro ao salvar o arquivo', e.message);
    return null;
  }
};

const getAllSpeakers = async () => {
  const speakers = await readFile();
  return speakers;
};

const getSpeakerById = async (id) => {
  const speakers = await readFile();
  return speakers.find((speaker) => speaker.id === id);
};

module.exports = {
  writeFile,
  getAllSpeakers,
  getSpeakerById,
};