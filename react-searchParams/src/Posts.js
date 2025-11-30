import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import FilterPost from './FilterPost';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuerry = searchParams.get('post') || '';

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])



    return (
        <div>

            <FilterPost setSearchParams={setSearchParams} />

            
            {
                posts
                .filter(post => post.title.includes(searchQuerry))
                .map(post => <Link to={'/post/' + post.id} key={post.id}> 
                <li >{post.id}. {post.title} </li> </Link>)
            }
            
        </div>
    )
}

export default Posts