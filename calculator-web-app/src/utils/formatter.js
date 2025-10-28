/**
 * Formats a number to a string, preserving up to two decimal places if present.
 * If the number is an integer, it returns the number as a string without decimal places.
 * @param {number} number - The number to format
 * @returns {string} The formatted number as a string
 */
export function formatNumberToStringWithDecimals(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }
    if (Number.isInteger(number)) {
        return number.toString();
    }
    return number.toFixed(2);
}
