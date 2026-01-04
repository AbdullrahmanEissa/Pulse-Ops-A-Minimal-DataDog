import { useEffect, useState } from 'react'
import { api } from '../services/api'

export default function Incidents() {
  const [incidents, setIncidents] = useState([])

  useEffect(() => {
    api.get('/incidents').then(res => setIncidents(res.data))
  }, [])

  return (
    <>
      <h2>Incidents</h2>
      <ul>
        {incidents.map((i, idx) => (
          <li key={idx}>
            [{i.timestamp}] {i.serviceName} → {i.status} ({i.reason})
          </li>
        ))}
      </ul>
    </>
  )
}
