import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import Dashboard from './components/player/dashboard/Dashboard';
import Create from './components/player/create/Create';
import CreateSport from './components/player/create/CreateSport';
import Join from './components/player/join/Join';
import JoinTeam from './components/player/join-team/JoinTeam';
import Statistics from './components/player/Statistics/Statistics';
import Schedules from './components/player/schedules/Schedules';
import './App.css'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/player/create" element={<Create />} />
        <Route path="/player/create/createsport" element={<CreateSport />} />
        <Route path="/player/join" element={<Join />} />
        <Route path="/player/join/jointeam" element={<JoinTeam />} />
        <Route path="/player/statistics" element={<Statistics />} />
        <Route path="/player/schedules" element={<Schedules />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
