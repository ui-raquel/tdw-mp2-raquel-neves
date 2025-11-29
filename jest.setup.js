import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfills para react-router-dom
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
