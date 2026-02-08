interface MobileMenuButtonProps {
  onClick: () => void;
}

export const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <button
      type="button"
      aria-label="Open navigation menu"
      onClick={onClick}
      className="md:hidden block text-white hover:text-[#d4ff00] transition-colors"
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
