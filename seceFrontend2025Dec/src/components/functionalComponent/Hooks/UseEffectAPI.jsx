import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  const [postsParameter, setPostsParameter] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPostsParameter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>useEffect API Component</h1>
      <p>It is going to fetch data from JSON Typicode Placeholder API.</p>

      <p>The API values fetched are:</p>

      <ol>
        {postsParameter.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffectAPI;
