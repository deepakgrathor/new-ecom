import React from "react";

const SectionTitle = ({ title, SubTitle, description }) => {
  return (
    <>
      <div className="text-center space-y-3 mt-20">
        <h2 className="text-4xl font-bold">
          <span className="text-blue-500">{title}</span>
          {SubTitle}
        </h2>
        <h3 className="text-lg">{description}</h3>
      </div>
    </>
  );
};

export default SectionTitle;
