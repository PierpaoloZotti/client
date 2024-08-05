import Navbar from '@/app/dashboard/_components/navbar';
import React from 'react';

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex w-full min-h-screen bg-gray-50 text-gray-900`}>
      Sidebar
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
