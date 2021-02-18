import { useEffect, useState } from "react";

// const Api = 'http://localhost:5000/'
// declare var __BACKEND_URL__: string
// const Api = __BACKEND_URL__
function useFetchData(
  route: string,
  requestData: object,
  method: string,
  afterFunction?: Function
) {
  const [data, setData]: [any, any] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function init() {
    setData(undefined);
    setLoading(true);
    setLoading(false);
  }
  useEffect(() => {
    if (typeof data != "undefined" && loading === false) {
      console.log("🛫🛫 FIN DE USEFETCH", route);
      if (typeof afterFunction == "function") {
        afterFunction();
      }
    }
  }, [loading]);

  async function load() {
    console.log("🛫🛫 INICIO DE USEFETCH", route);
    init();
    setLoading(true);
    try {
      const response = await fetch(`https://opentdb.com/${route}`, {
        method,
        // headers: {
        //   "Content-Type": "application/json",
        //   xtoken: localStorage.getItem("token"), // Enviando token actual
        // },
        body: JSON.stringify(requestData),
      });
      const info = await response.json();
      // console.log(info)
      if (response.status === 500) {
        throw info.errorMessage; // no importa el mensaje
      }
      setError("");
      setData(info);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }

  return [{ data, loading, error }, load] as const;
}

export default useFetchData;
