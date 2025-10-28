// This file is the entry point for the JavaScript functionality of the application.
// It initializes the calculator and handles user interactions.

import Calculator from './components/calculator.js';

document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
    calculator.init();
});