import React from "react";

const Skill = ({ skill }) => {
  const { id, icon, title } = skill;
  return (
    <div className="card bg-[#111827] backdrop-blur-3xl hover:shadow-[#111827] group hover:scale-110 duration-300 rounded-lg border-2 border-[#aafaff] shadow-lg">
      <figure className="px-6 pt-10">
        <img
          src={icon}
          alt="Shoes"
          className=" group-hover:scale-125 duration-300   px-2 py-2 w-16 h-16 object-contain"
        />
      </figure>
      <div className="card-body pt-3 p-0 pb-10 items-center text-center">
        <h2 className="card-title text-xl font-semibold text-white ">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Skill;
