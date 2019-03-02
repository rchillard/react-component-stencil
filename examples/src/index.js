import React from 'react';
import { render} from 'react-dom';
import StencilComponent from '../../src';
const App = () => (
    <StencilComponent />
);
render(<App />, document.getElementById("root"));