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

const insertSpeaker = async (info) => {
  const speakers = await readFile();
  const id = speakers[speakers.length - 1].id + 1;
  const newSpeaker = {
    id,
    ...info,
  };
  speakers.push(newSpeaker);
  await writeFile(speakers);
  return newSpeaker;
};

const updateSpeaker = async (id, info) => {
  const speakers = await readFile();
  const speakerIndex = speakers.findIndex((speaker) => speaker.id === id);
  if (speakerIndex === -1) {
    return -1;
  }
  const newSpeaker = { id, ...info };
  const newSpeakers = speakers.map((speaker, index) => {
    if (index === speakerIndex) {
      return newSpeaker;
    } 
      return speaker;
  });
  await writeFile(newSpeakers);
  return newSpeaker;
};

module.exports = {
  getAllSpeakers,
  getSpeakerById,
  insertSpeaker,
  updateSpeaker,
};