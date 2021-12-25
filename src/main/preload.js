const { contextBridge, ipcRenderer } = require('electron');
const { readFile } = require('fs/promises');

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
});

getConfigFile('src/config.json')
  .then((data) => {
    return contextBridge.exposeInMainWorld('configData', data);
  })
  .catch((err) => console.log(err));

getExistingScenarios('data/Scenarios.json')
  .then((data) => {
    return contextBridge.exposeInMainWorld('savedScenarios', data);
  })
  .catch((err) => console.log(err));
