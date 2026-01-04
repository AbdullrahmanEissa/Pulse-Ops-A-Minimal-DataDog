import { useEffect, useState } from 'react'
import { api } from '../services/api'

export default function ServicesTable() {
  const [services, setServices] = useState([])

  useEffect(() => {
    api.get('/health').then(res => setServices(res.data))
  }, [])

  return (
    <>
      <h2>Services</h2>
      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Last Check</th>
          </tr>
        </thead>
        <tbody>
          {services.map(s => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.status}</td>
              <td>{s.lastChecked || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
