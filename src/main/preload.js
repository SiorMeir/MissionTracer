const { contextBridge, ipcRenderer } = require('electron');
const { appendFile, readFile } = require('fs/promises');
const { readFileSync } = require('fs');

window.__devtron = {require: require, process: process}

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

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel, func) {
      const validChannels = [
        'ipc-example',
        'update-scenarios',
        'get-scenarios',
      ];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
    once(channel, func) {
      const validChannels = [
        'ipc-example',
        'update-scenarios',
        'get-scenarios',
      ];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
  },
  fileHandling: {
    getExistingScenarios() {
      console.log('getting existing scenarios');
      ipcRenderer.send('get-scenarios');
    },
    saveScenarios(scenario) {
      console.log('Logged scenario to scenario file');
      console.log(scenario);
      ipcRenderer.send('update-scenarioes', scenario);
    },
    deleteScenario(scenarioId) {},
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
