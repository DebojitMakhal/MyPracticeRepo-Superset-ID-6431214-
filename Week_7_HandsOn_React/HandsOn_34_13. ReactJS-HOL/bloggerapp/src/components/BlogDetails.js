import React from "react";

function BlogDetails() {
  const blogs = [
    {
      blogName: "The Power of Habit",
      blogAuthor: "Charles Duhigg",
      body: "A fascinating look into the science of habit formation."
    },
    {
      blogName: "Sapiens: A Brief History of Humankind",
      blogAuthor: "Yuval Noah Harari",
      body: "A thought-provoking journey through the history of our species."
    },
    {
      blogName: "Educated: A Memoir",
      blogAuthor: "Tara Westover",
      body: "An inspiring story of a young woman who overcomes a difficult upbringing to pursue education."
    }
  ];
  
  return (
    <div className="p-4 border rounded bg-green-100 m-2">
      <h1>📝 Blog Details</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h2>Title: {blog.blogName}</h2>
          <h3>Author: {blog.blogAuthor}</h3>
          <p>Body: {blog.body}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
