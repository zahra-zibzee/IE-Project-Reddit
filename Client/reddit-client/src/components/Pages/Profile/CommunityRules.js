import React from "react";

const CommunityRules = (params) => {
    const rules = params.rules;
  return (
    <>
      <div className="bg-white rounded mt-4">
        <div className="bg-primary rounded-top p-3 text-white fw-bold">
          Community rules
        </div>
        <ul className="list-group p-2 mb-4">
            {
               rules.map((rule, index) => {
                   return <li className="list-group-item" key={index} >{index + 1 + ". " + rule}</li>
               })
            }
          
        </ul>
      </div>
    </>
  );
};

export default CommunityRules;
