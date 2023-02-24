import React from "react";

const Index = () => {
  return (
    <div className="info-bg">
      <div className="white-frame">
        <h1 className="p-xl-semi text-textblack mb-8">Hi, Steven!</h1>
        <div className="flex items-start gap-8">
          <div className="w-[276px] flex flex-col gap-2">
            <button className="tab-btn w-full text-left px-3 py-[10px] rounded-xl p-sm text-weight-medium text-textcolor bg-cardbg ">
              Account details
            </button>
            <button className="tab-btn w-full text-left px-3 py-[10px] rounded-xl p-sm text-weight-medium text-textblack ">
              Investor profile
            </button>
            <button className="tab-btn w-full text-left px-3 py-[10px] rounded-xl p-sm text-weight-medium text-textblack ">
              Email & password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
