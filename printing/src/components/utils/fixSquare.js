export const fixSquare = (str) => {
    if (str.includes("м2")) {
        const re = /м2/gi;
        return str.replace(re, "м²");
    } else {
        return str;
    }
}