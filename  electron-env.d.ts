// electron-env.d.ts
export interface IElectronAPI {
  // getFilePath 方法时preload.ts中使用的方法，后面添加方法，此处也要同步申明
  minimizeWindows: () => Promise<void>;
  MaximizeWindows: () => Promise<void>;
  CloseWindow: () => Promise<void>;
}

declare global {
  interface Window {
    electron: IElectronAPI;
  }
}
