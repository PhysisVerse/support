// types/intercom.d.ts

declare global {
  interface Window {
	intercomSettings?: {
	  app_id: string;
	  [key: string]: any;
	};
	Intercom?: IIntercom;
  }
}

export interface IIntercom {
  (action: string, ...args: any[]): void;
  q?: IIntercom[];
  c?: (args: any) => void;
}
