import React, { useState, useEffect } from "react";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedbacks);
  }, []);

  return (
    <div>
      <h2>Feedback Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service Quality</th>
            <th>Beverage Quality</th>
            <th>Restaurant Cleanliness</th>
            <th>Dining Experience</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={index}>
              <td>{feedback.name}</td>
              <td>{feedback.email}</td>
              <td>{feedback.phone}</td>
              <td>{feedback.serviceQuality}</td>
              <td>{feedback.beverageQuality}</td>
              <td>{feedback.restaurantCleanliness}</td>
              <td>{feedback.diningExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;
