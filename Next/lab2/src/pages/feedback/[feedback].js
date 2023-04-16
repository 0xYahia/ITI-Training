import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SingleFeedback = () => {
  const router = useRouter();
  const { feedbackId } = router.query;
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (feedbackId) {
      fetch(`/api/feedback/${feedbackId}`)
        .then((res) => res.json())
        .then((data) => {
          setFeedback(data.feedback);
        });
    }
  }, [feedbackId]);

  if (!feedback) return <p>Loadding...</p>;
  return (
    <div>
      <h1>{feedback.email}</h1>
      <p>{feedback.message}</p>
    </div>
  );
};

export default SingleFeedback;
