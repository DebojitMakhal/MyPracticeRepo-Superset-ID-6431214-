import React from "react";

function CourseDetails() {
  const courses = [
    { courseName: "Introduction to Python", startDate: "2025-09-01" },
    { courseName: "Web Development with React", startDate: "2025-09-15" },
    { courseName: "Data Science with R", startDate: "2025-10-01" },
    { courseName: "Machine Learning Fundamentals", startDate: "2025-10-15" },
    { courseName: "Cybersecurity Essentials", startDate: "2025-11-01" },
  ];

  return (
    <div className="p-4 border rounded bg-yellow-100 m-2">
      <h2>🎓 Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h3>Course Name: {course.courseName}</h3>
          <p>Start Date: {course.startDate}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;