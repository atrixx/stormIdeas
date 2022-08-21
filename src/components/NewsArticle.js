import React from "react";
export default function NewsArticle({ data }) {

    return (
        <div className = "news" >

            <img className = "news--img"
                src = { data.urlToImage }
                alt = "Anderson Post"
            />
            <p className = "news--name" >{data.source.name}</p>
            <a href = {data.url}><h1 className = "news--title" >{data.title}</h1> </a>
            <p className = "news--description">{data.description}</p>
            {/*<span><p>{data.author}</p></span>*/}
            <span className = "news--author">{data.author}</span>
            <span className = "published">{data.publishedAt}</span>

        </div>
    );
}