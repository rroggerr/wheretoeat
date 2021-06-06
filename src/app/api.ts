const myFetch = async (url: string, params: any) => {
    const resp = await fetch(url, params);
    const data = await resp.json();
    return data;
  };

export const getLatLong = async () => {
    const b = await myFetch('http://ip-api.com/json', {})
    return (b)
}
