import React from "react";
export default function NewsArticle({ data }) {

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{data.source.name}</p>
        </div>
    );
}