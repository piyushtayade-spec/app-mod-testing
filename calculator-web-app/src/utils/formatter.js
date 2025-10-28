export function formatNumber(num) {
    return Number(num).toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 0
    });
}

export function formatResult(result) {
    return result.toString().includes('.') ? result.toFixed(2) : result.toString();
}