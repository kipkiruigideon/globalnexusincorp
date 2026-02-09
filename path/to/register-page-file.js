// Assuming this is the complete and corrected register page file with the specified lines changed and additional code added. Replace this comment with the actual code of the register page after applying the changes.

// Your updated register page code here

// 1. Change line 121
// bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]
// To:
bg-gradient-to-br from-[#0ea5e9] via-[#0284c7] to-[#0369a1]

// 2. Change line 124
// bg-[#0ea5e9]/5
// To:
bg-white/10

// 3. Change line 125
// bg-[#0ea5e9]/5
// To:
bg-white/10

// 4. Change line 126
// bg-[#0ea5e9]/3
// To:
bg-white/8

// 5. Change line 173
// p-6 lg:px-10 lg:pt-8 lg:pb-6
// To:
p-4 lg:px-8 lg:pt-6 lg:pb-4

// 6. Add card wrapper div starting from line 174
<div className="w-full max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">

// 7. Add dark mode toggle button after line 176
<div className="flex justify-end mb-4">
    <button type="button" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors dark-mode-toggle" title="Toggle Dark Mode">
        <i className="fa-solid fa-moon"></i>
    </button>
</div>

// Your other components and content follow here.
