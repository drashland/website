import * as React from 'react'

interface Props {
    title: string,
    description: string
}

const DenoTweets = (props: Props) => {
    const { title, description } = props;
    return (
        <div>
            <h1 className="text-5xl">{ title }</h1>
            <p className="text-xl mb-5">{ description }</p>
            <hr className="mb-5"/>
            <a className="twitter-timeline" href="https://twitter.com/deno_land?ref_src=twsrc%5Etfw">
                Tweets by deno_land
            </a>
        </div>
    )
}

export default DenoTweets