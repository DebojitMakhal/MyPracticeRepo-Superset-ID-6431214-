import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const posts = data.map(post => {
                    return new Post(post.id, post.title, post.body);
                });
                this.setState({ posts: posts });
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert(`Error: ${error}\nInfo: ${info}`);
    }

    render() {
        return (
            <div className="posts-container">
                <h1>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} className="post">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;