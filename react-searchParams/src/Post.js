import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {

    const {id} = useParams();

    const [post, setPost] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos/' + id)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])



  return (
    <div>
        <p>id: {post.id}</p>
        <p>title: {post.title}</p>
        <img src={post.thumbnailUrl} />
    </div>
  )
}

export default Post