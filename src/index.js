/**
 * index.js
 */

import React from 'react';
import { render } from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

const MainApp = () => (
    <h1>Hello React2!</h1>
);

render(
    <MainApp />,
    document.getElementById('app')
);