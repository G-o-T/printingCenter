const url = "https://script.google.com/macros/s/AKfycbyQT1cx9Y1zWlXz5UxxUHHFoxAAtEun8MZ2DSCoC6wabWQJq7sQOVFgN1R-ncQmbHdRqQ/exec";
export const getPosts = async () => {
    const res = await fetch(url, { next: { revalidate: 360 } });
    const posts = await res.json();
    if( !res.ok ) throw new Error( "Ошибка при получении постов" );
    return posts;
};




// { cache: 'no-store' }
// { next: { revalidate: 3600 } }