import React from 'react';

//import reportWebVitals from './reportWebVitals';

import NavDash from "../../components/NavDashboard/NavDash.js";
import FormDash from "../../components/FormDash/FormDash.js";
import "./dashboard.css";

function Dashboard() {
    return (
        <div className='zzz'>
            <NavDash/>
            <FormDash/>

        </div>
    );
}

export default Dashboard;

//reportWebVitals();