import { log } from "console";

const RANDOM = '9cUWAoqn31X0n2hs5uqSlfIaX6joAULyQByQRvZ2lcM';
const url = 'https://api.unsplash.com/photos';


export const getImg = async (img) => {
    const response = await fetch(`${url}/${img}?client_id=${RANDOM}`);
    const imgInfo = await response.json();
    return imgInfo;
  };