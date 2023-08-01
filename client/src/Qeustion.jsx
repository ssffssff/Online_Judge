import React from "react";

const Question = () => {
  const questionUrl = "https://example.com"; // Replace with the URL of your question

  const handleQuestionClick = () => {
    window.open(questionUrl, "_blank");
  };

  return (
    <div>
      {/* Add your question content and JSX here */}
      <h3>Example Question</h3>
      <p>This is an example question.</p>
      <button onClick={handleQuestionClick}>Open Question</button>
    </div>
  );
};

export default Question;
