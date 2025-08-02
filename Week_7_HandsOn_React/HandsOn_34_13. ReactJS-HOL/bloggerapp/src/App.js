import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [activeComponent, setActiveComponent] = useState("book");
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1 style={{ background: "rgba(204, 78, 78, 1)", padding: "10px" }}>📖 Blogger App</h1>

      {/* Buttons to switch components */}
      <div className="buttons" style={{ margin: "10px" }}>
        <button className="btn" onClick={() => setActiveComponent("book")}>Show Book</button>
        <button className="btn" onClick={() => setActiveComponent("blog")}>Show Blog</button>
        <button className="btn" onClick={() => setActiveComponent("course")}>Show Course</button>
        <button className="btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Hide All" : "Show All"}
        </button>
      </div>

      <hr />

      <div>
        {showAll ? (
          <div style={{ display: "flex", flexDirection: "colmn", alignItems: "center" }}>
            <BookDetails />
            <BlogDetails />
            <CourseDetails />
          </div>
        ) : (
          <>
            {activeComponent === "book" && <BookDetails />}
            {activeComponent === "blog" && <BlogDetails />}
            {activeComponent === "course" && <CourseDetails />}
          </>
        )}
      </div>
      <hr />
        {showAll ? null : (
          <>
      <div>
        <h2 style={{ background: "rgb(114, 192, 235)", padding: "10px" }}> Ternary Example</h2>
        {activeComponent === "book" ? (
          <BookDetails />
        ) : activeComponent === "blog" ? (
          <BlogDetails />
        ) : (
          <CourseDetails />
        )}
      </div>
      <hr />
      <div>
        <h2 style={{ background: "rgb(114, 192, 235)", padding: "10px" }}>Switch Example</h2>
        {(() => {
          switch (activeComponent) {
            case "book":
              return <BookDetails />;
            case "blog":
              return <BlogDetails />;
            case "course":
              return <CourseDetails />;
            default:
              return <p>No Component Selected</p>;
          }
        })()}
      </div>
      </>
      )}
    </div>
  );
}

export default App;
