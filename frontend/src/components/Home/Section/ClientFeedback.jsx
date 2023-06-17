import React from "react";
import ClientFeedbackSlider from "../../Slider/ClientFeedbackSlider";

function ClientFeedback() {
  return (
    <section className="py-[150px]">
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex flex-col gap-[50px]">
          <h2 className="text-[36px] text-center font-[600]">Clients Feedback</h2>
          <ClientFeedbackSlider />
        </div>
      </div>
    </section>
  );
}

export default ClientFeedback;
