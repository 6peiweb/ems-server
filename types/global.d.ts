declare namespace global {
  interface errInfo {
    (info: string): void;
  }
}

declare const errInfo: global.errInfo;
