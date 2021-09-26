/** Function to convert file size from byte */
export const convertByteInString = (val) => {
    let convertedVal;
    if (val < 1048576) {
        convertedVal = Number.parseFloat(val / 1024).toFixed(2) + 'kb';
        return convertedVal;
    } else if (val >= 1048576) {
        convertedVal = Number.parseFloat(val / 1048576).toFixed(2) + 'mb';
        return convertedVal;
    }
}