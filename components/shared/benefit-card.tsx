import React from 'react';

interface BenefitCardProps {
  number: number | string;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="relative bg-[#F2F2F2] rounded-xl p-6 pt-12 text-center w-[276px] shadow-sm h-60 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2  rounded-full w-28 h-28 flex items-center justify-center bg-background">
        <div className="rounded-full w-20 h-20 bg-[#F2F2F2] flex items-center justify-center shadow-md border border-gray-200 ">
          <span className="text-5xl font-semibold">{number}</span>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2 h-16">{title}:</h3>
      <p className="text-lg font-semibold text-gray-700">{description}</p>
    </div>
  );
};

export default BenefitCard;
