import React from 'react';

const RegisterPage = () => {
  return (
    <div>
      {/* Existing content */}
      <div className="hidden lg:flex lg:w-[45%] flex-col justify-center items-center p-12 bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#0369a1] relative overflow-hidden">
        {/* Floating circles styling changes */}
        <div className="bg-white/10">...</div>
        <div className="bg-white/10">...</div>
        <div className="bg-white/8">...</div>
      </div>
      <div className="flex-1 flex flex-col p-4 lg:px-8 lg:pt-6 lg:pb-4 overflow-y-auto">
        <div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="flex justify-end mb-4">
            <button 
              type="button"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors dark-mode-toggle"
              title="Toggle Dark Mode"
            >
              <i className="fa-solid fa-moon"></i>
            </button>
          </div>
          {/* Create Account Header */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;