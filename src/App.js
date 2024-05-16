import React, { useState } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackList from "./FeedbackList";

const App = () => {
  const [tab, setTab] = useState("form");

  const handleFormSubmit = (formData) => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    localStorage.setItem(
      "feedbacks",
      JSON.stringify([...storedFeedbacks, formData])
    );
  };

  return (
    <div>
      <nav>
        <button onClick={() => setTab("form")}>Feedback Form</button>
        <button onClick={() => setTab("list")}>Feedback List</button>
      </nav>
      {tab === "form" ? (
        <FeedbackForm onFormSubmit={handleFormSubmit} />
      ) : (
        <FeedbackList />
      )}
    </div>
  );
};

export default App;
