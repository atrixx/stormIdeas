import React, {useContext, useState} from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

export default function News() {
    const { data } = useContext(NewsContext);
    const [newsCount, setNewsCount] = useState(9)
    const loadMoreNews = () => {
        // console.log(data, 'dl')
        setNewsCount(data.length)
    }

    return (
        <div className = "news--container">
            { data
                ? data.articles.slice(0, newsCount).map( (news) => (
                    <NewsArticle
                        data = { news }
                        key = { news.url }
                    />
                ))
                : "Loading..."
            }
            <div className='header'>
                <button
                    type="button"
                    className = 'footer--button'
                    onClick = { loadMoreNews }>load more</button>
            </div>

        </div>
    )
}