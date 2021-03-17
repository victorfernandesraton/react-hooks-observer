export const getClimate = (params: any) => {
  const myHeaders = new Headers();
  myHeaders.append(
    "x-rapidapi-key",
    " 70e7ba210dmsh524f4d4d3e90017p13df6cjsnf13f5cd11c93"
  );
  myHeaders.append(
    "x-rapidapi-host",
    " community-open-weather-map.p.rapidapi.com"
  );
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const query = Object.keys(params)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");

  return fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?${query}`,
    requestOptions
  );
};
