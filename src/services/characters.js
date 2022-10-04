export const search = async (searchObj) => {
  // TODO: Visit adding to URLSearchParams, append, and toString().
  const query = Array.from(Object.entries(searchObj))
    .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
    .join('&');
  // console.log('whole query', process.env.ZELDA_URL + '?' + query);
  
  const res = await fetch(process.env.ZELDA_URL + '?' + query);
  if (res.status >= 400) {
    throw res;
  } else {
    const body = await res.json();
    // console.log('search results', body);

    return body;
  }
};
