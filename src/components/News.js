import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";

export default function News() {
    const { data } = useContext(NewsContext);

    console.log(data)
    return (
        <div>
            { data
                ? data.articles.map( (news) => (
                    <NewsArticle
                        data = {news}
                        key = {news.url}
                    />
                ))
                : "Loading"
            }
        </div>
    )
}