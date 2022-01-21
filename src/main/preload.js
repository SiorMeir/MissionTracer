const { contextBridge, ipcRenderer } = require('electron');
const { appendFile, readFile } = require('fs/promises');

const DATA_FILEPATH = 'data/Scenarios.json';
const CONFIG_FILEPATH = 'src/config.json';

function getConfigFile(filePath) {
  const data = readFile(filePath, 'utf-8')
    .then((res) => JSON.parse(res))
    .catch((err) => console.log('Error reading config file', err));
  return data;
}

function getExistingScenarios(filePath) {
  const data = readFile(filePath, 'utf-8')
    .then((res) => JSON.parse(res))
    .catch((err) => console.log('Error reading config file', err));
  return data;
}

function appendScenarios(filepath, scenarios) {}

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
  fileHandling: {
    saveScenarios(scenariosData) {
      console.log('Logged scenario to scenario file');
      console.log(scenariosData);
      appendFile(DATA_FILEPATH, scenariosData)
        .then(
          ipcRenderer.on('update-scenarioes', (event, ...arg) =>
            console.log(event)
          )
        )
        .catch('Error occured logging scenario data');
    },
  },
});

getConfigFile(CONFIG_FILEPATH)
  .then((data) => {
    return contextBridge.exposeInMainWorld('configData', data);
  })
  .catch((err) => console.log(err));

getExistingScenarios(DATA_FILEPATH)
  .then((data) => {
    return contextBridge.exposeInMainWorld('savedScenarios', data);
  })
  .catch((err) => console.log(err));
