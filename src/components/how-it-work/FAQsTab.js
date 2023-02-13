import Image from 'next/image';
import React, { useState } from 'react';

const FAQsTab = ({ title, description }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div className="faqs-tabs-section ">
      {/* Header */}
      <div
        className="faqs-tabs-header "
        onClick={() => {
          setShowDetail(!showDetail);
        }}
      >
        <h3 className="faqs-tabs-heading ">{title}</h3>
        {/* fa_un_expand_more.svg */}
        <Image
          src={`/images/${
            showDetail ? 'fa_expand_less' : 'fa_un_expand_more'
          }.svg`}
          width={20}
          height={20}
        />
      </div>
      {showDetail && (
        <div className="faqs-tabs-detail ">
          <p className=" faqs-tabs-prep ">{description}</p>
        </div>
      )}
    </div>
  );
};

export default FAQsTab;
