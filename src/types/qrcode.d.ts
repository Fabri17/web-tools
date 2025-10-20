declare module 'qrcode' {
	export interface QRCodeToDataURLOptions {
		type?: 'image/png' | 'image/jpeg' | 'image/webp';
		quality?: number;
		margin?: number;
		width?: number;
		color?: {
			dark?: string;
			light?: string;
		};
		errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
	}

	export interface QRCodeToStringOptions {
		type?: 'svg' | 'terminal' | 'utf8';
		margin?: number;
		width?: number;
		color?: {
			dark?: string;
			light?: string;
		};
		errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
	}

	export interface QRCodeToCanvasOptions {
		margin?: number;
		width?: number;
		color?: {
			dark?: string;
			light?: string;
		};
		errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
	}

	export function toDataURL(
		text: string,
		options?: QRCodeToDataURLOptions
	): Promise<string>;

	export function toString(
		text: string,
		options?: QRCodeToStringOptions
	): Promise<string>;

	export function toCanvas(
		canvas: HTMLCanvasElement,
		text: string,
		options?: QRCodeToCanvasOptions
	): Promise<void>;

	export default {
		toDataURL,
		toString,
		toCanvas,
	};
}
