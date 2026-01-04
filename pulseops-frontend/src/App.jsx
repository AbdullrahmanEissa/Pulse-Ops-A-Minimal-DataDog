import ServicesTable from './components/ServicesTable'
import Incidents from './components/Incidents'

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>PulseOps Dashboard</h1>
      <ServicesTable />
      <Incidents />
    </div>
  )
}
