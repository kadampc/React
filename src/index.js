import React from 'react';
import ReactDOM from 'react-dom';

const App2 = () =>
{

    return <div>Hello</div>;
}
const App1=function()
{
    return <div>Header1</div>;

}

ReactDOM.render(<App2 />, document.querySelector('.container'));