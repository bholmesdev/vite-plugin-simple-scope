import { Plugin } from 'vite';

export default function simpleScope(): Plugin;

declare module 'simple:scope' {
	export function scope(prefix?: string): string;
}
