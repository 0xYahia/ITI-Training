import React from "react";
import { getFeedbackData } from "../api/feedback";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
  const feedback = await getFeedbackData();
  console.log(feedback);
  return {
    props: {
      feedback,
    },
  };
};

const Feedback = (props) => {
  const router = useRouter();
  const { feedback } = props;

  if (!feedback) return <p>No Feedback Yet</p>;
  const handleFeedback = (id) => {
    router.push(`feedback/${id}`);
  };
  return (
    <div>
      {feedback.map((feedback) => (
        <h1 key={feedback.id} onClick={() => handleFeedback(id)}>
          {feedback.email}
        </h1>
      ))}
    </div>
  );
};

export default Feedback;
