const url = "https://script.google.com/macros/s/AKfycbzwNpzw_ykfZVQ6aymSSigy4JSjseemHs-SSXQHK1re5w_abpuOAziCBGMN3zdXu6J4/exec";

export const getPrices = async () => {
    const res = await fetch(url, { cache: 'no-store' });
    const prices = await res.json();
    if( !res.ok ) throw new Error( "Ошибка при получении цен" );
    return prices;
};

export const getMinPrices = async () => {
  const res = await fetch(url, { cache: 'no-store' });
  const prices = await res.json();
  const minPrices = prices.minPriceData;
  if( !res.ok ) throw new Error( "Ошибка при получении минимальных цен" );
  return minPrices;
};



// { cache: 'no-store' }
// { next: { revalidate: 3600 } }