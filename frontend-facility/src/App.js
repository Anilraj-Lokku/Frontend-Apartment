import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home page/Home";
import SignupDashboard from "./components/home page/SignupDashboard";
import FacilityForm from "./components/facility/FacilityForm";
import FacilityGrid from "./components/facility/FacilityGrid";
import LoginPage from "./components/login/LoginPage";
import ManagerLogin from "./components/login/ManagerLogin";
import ResidentLogin from "./components/login/ResidentLogin";
import ManagerRegistrationForm from "./components/manager/ManagerRegistrationForm";
import ResidentGrid from "./components/Resident/ResidentGrid";
import ResidentRegistrationForm from "./components/Resident/ResidentRegistrationForm";
import Managerview from "./components/dashboard/Managerview";
import ResidantTable from "./components/Resident/ResidantTable";
import FacilityCreationMessage from "./components/messages/FacilityCreationMessage";
import FacilityUpdateMessage from "./components/messages/FacilityUpdateMessage";
import FacilityDeletedMessage from "./components/messages/FacilityDeletedMessage";
import ResidentCreationMessage from "./components/messages/ResidentCreationMessage";
import ResidentUpdateMessage from "./components/messages/ResidentUpdateMessage";

function App() {
 return (
  <Routes>
   <Route path="/" Component={Home} />
   <Route path="/signupdashboard" Component={SignupDashboard} />
   <Route path="/managerview" Component={Managerview} />
   <Route path="/login" Component={LoginPage} />
   <Route path="/manager/login" Component={ManagerLogin} />
   <Route path="/resident/login" Component={ResidentLogin} />
   <Route path="/register-manager" Component={ManagerRegistrationForm} />
   <Route path="/approve-resident" Component={ResidentGrid} />
   <Route path="/create-facility" Component={FacilityForm} />
   <Route path="/viewfacility" Component={FacilityGrid} />
   <Route path="/viewresident" Component={ResidentGrid} />
   <Route path="/register-resident" Component={ResidentRegistrationForm} />
   <Route path="/residenttable" Component={ResidantTable} />
   <Route path="/facilitycreationmessage" Component={FacilityCreationMessage} />
   <Route path="/facilityupdatemessage" Component={FacilityUpdateMessage} />
   <Route path="/facilitydeletedmessage" Component={FacilityDeletedMessage} />
   <Route path="/residentcreationmessage" Component={ResidentCreationMessage} />
   <Route path="/residentupdatemessage" Component={ResidentUpdateMessage} />
  </Routes>
 );
}

export default App;
