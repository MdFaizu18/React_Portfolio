import React from 'react';

const FooterBottom = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {currentYear}. All rights reserved by Mohammed Faizullah
      </p>
    </div>
  );
}

export default FooterBottom;
