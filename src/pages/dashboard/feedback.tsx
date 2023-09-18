import FeedbackContent from "#/components/View/Dashboard/Support/feedback";
import PanelHead from "#/components/common/PanelHead";
import React from "react";

const Feedback = () => {
  return (
    <div className="bg-white shadow-base h-full rounded-xl p-14">
      <PanelHead title="Feedback" />
      <FeedbackContent />
    </div>
  );
};

export default Feedback;
