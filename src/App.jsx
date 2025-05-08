import Employee from "./Pages/Employee";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Manager from "./Pages/Manager";
import Source from "./Pages/Source";
import Properties from "./Pages/Properties";
import Clients from "./Pages/Clients";
import Analytics from "./Pages/Analytics";
import Feedback from "./Pages/Feedback";
import ViewListing from "./Pages/Viewlisting";
import Support from "./Pages/Support";
import NewListing from "./Pages/NewListing";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Employee />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/source" element={<Source />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/dashboard" element={<Clients />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/feedback" element={<Feedback />} />
        <Route path="/dashboard/listing" element={<ViewListing />} />
        <Route path="/dashboard/support" element={<Support />} />
        <Route path="/new-listing" element={<NewListing />} />
      </Routes>
    </Router>
  );
}

export default App;