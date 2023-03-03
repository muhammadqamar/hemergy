import React from "react";
import FAQsTab from "./FAQsTab";

const FAQs = ({ allFaqs }) => {
  return (
    <div className="hiw-faqs-section ">
      <div className="hiw-faqs-div">
        <div className="hiw-faqs-detail ">
          <h2 className="hiw-faqs-heading ">FAQs</h2>
          <div className="hiw-faqs-list">
            {allFaqs?.map((data, index) => {
              return (
                <FAQsTab
                  key={index}
                  question={data.fields.question}
                  answer={data.fields.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <div className="hiw-wather-img" /> */}
    </div>
  );
};

export default FAQs;
