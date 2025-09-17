import React from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

function App() {
  return (
    <div className="App">
      <h1>Job Application Portal</h1>
      <JobForm />
      <JobList />
    </div>
  );
}

export default App;