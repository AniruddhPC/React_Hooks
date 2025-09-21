import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  let [data, setData] = useState(null)
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(null)

  const fetchData = useCallback(() => {
    setLoading(true)

    fetch(url)
      .then(res => {
        if(!res.ok) throw new Error("Failed")
        return res.json()
      })
      .then(result => {
        setData(result)
        setError(null)
      })
      .catch(err => {
        setError(err.message || "Error Occurred")
        setData(null)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error }
}

export default useFetch;