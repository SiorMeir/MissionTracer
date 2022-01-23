// Type declaration for TypeScript transpiler

export interface ElectronAPI {
  ipcRenderer: {
    myPing: () => Promise<void>;
    on: (event: any, args: any) => Promise<void>;
    once: () => Promise<void>;
  };
  fileHandling: {
    getExistingScenarios: () => Promise<void>;
    saveScenarios: () => Promise<void>;
    deleteScenario: () => Promise<void>;
  };
}

declare global {
  interface Window {
    electron: ElectronAPI;
  }
}
