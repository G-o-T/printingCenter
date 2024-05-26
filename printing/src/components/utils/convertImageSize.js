export const convertImageSize = (width, inputValue) => {
    const conversion = (inputValue*0.06944444444*(width/100));
    return conversion
}