import React from 'react'

type Props = {
    news: any
}

const index = (props: Props) => {

    const news = props.news

    console.log("news", news)

    return (
        <div>
            <h1>News</h1>

            <ul>
                {news.map((newsItem: any) => (
                    <li key={newsItem.id}>
                        <h3>{newsItem.title}</h3>
                        <p>{newsItem.description}</p>
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default index


export const getStaticProps = async () => {
    const reqWithQuery = await fetch(`http://localhost:3000/api/news`)
    const news = await reqWithQuery.json()

    console.log("data data", news)
    return {
        props: {
            news
        }
    }
}
