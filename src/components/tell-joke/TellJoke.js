import React, { useState, Fragment } from 'react'

export default function TellJoke({ url }) {
    const [isLoading, setIsLoading] = useState(false)

    async function handleLoadData() {
        setIsLoading(true)
        {/* handle fetching joke here */ }
    }

    return (
        <Fragment>
            <div>TellJoke</div>
            {/* Add joke here */}
            {isLoading && <div>Loading...</div>}
            {!isLoading && <button title='Tell Joke' onClick={handleLoadData}>Tell Joke</button>}
        </Fragment>
    )
}
