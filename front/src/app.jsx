import React from 'react';
import {Route, Routes} from 'react-router-dom';

import HelloWorldPage from './pages/hello-wolrd';


function App() {
    return(        
        <Routes>
            <Route path="/" element={<HelloWorldPage />} />            
        </Routes>
    );
}

export default App;