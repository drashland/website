import DenoTweets from './DenoTweets'
import ReactDOM from 'react-dom'
import * as React from 'react'

ReactDOM.render(
    <DenoTweets title={"Deno"} description={"A secure runtime for JavaScript and TypeScript"} />,
    document.getElementById('root')
);