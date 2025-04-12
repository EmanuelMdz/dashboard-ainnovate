import React from 'react'
import { FaUsers, FaChartLine, FaMoneyBillWave, FaBox } from 'react-icons/fa'
import './index.css'

function DashboardCard({ icon, title, value, color }) {
  return (
    <div className="card" style={{ borderTop: `4px solid ${color}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3>{title}</h3>
          <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{value}</p>
        </div>
        {React.createElement(icon, { size: 40, color: color })}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: 'white' }}>
        Dashboard Empresarial
      </h1>
      <div className="dashboard">
        <DashboardCard 
          icon={FaUsers} 
          title="Total Empleados" 
          value="124" 
          color="#3498db" 
        />
        <DashboardCard 
          icon={FaChartLine} 
          title="Ventas Mensuales" 
          value="$456,789" 
          color="#2ecc71" 
        />
        <DashboardCard 
          icon={FaMoneyBillWave} 
          title="Gastos" 
          value="$123,456" 
          color="#e74c3c" 
        />
        <DashboardCard 
          icon={FaBox} 
          title="Inventario" 
          value="456 Unidades" 
          color="#f39c12" 
        />
      </div>
    </div>
  )
}

export default App
