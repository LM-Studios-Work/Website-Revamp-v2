export const MobileMenuButton = () => {
  return (
    <button
      type="button"
      aria-label="Toggle navigation"
      className="md:hidden block text-white hover:text-[#a1ff0a] transition-colors"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};
