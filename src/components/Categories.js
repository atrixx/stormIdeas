import React from 'react';
export default function Categories({ data }) {
    return (
        <div className= "categories--container">
            <span className = "active">Top Headlines</span>
            <span>Business</span>
            <span>Entertainment</span>
            <span>General</span>
            <span>Health</span>
            <span>Science</span>
            <span>Sports</span>
            <span>Technology</span>
        </div>
    )
}