// Removed unused imports

// 1. Define the floating animation for the lime light
const animationStyles = `
  @keyframes float {
    0% { transform: translate(-50%, -50%) translate(0px, 0px); }
    33% { transform: translate(-50%, -50%) translate(30px, -50px); }
    66% { transform: translate(-50%, -50%) translate(-20px, 20px); }
    100% { transform: translate(-50%, -50%) translate(0px, 0px); }
  }
`;

export const Hero = () => {

  return (
    <section className="relative flex flex-col justify-end min-h-screen pt-40 pb-16 md:pb-28 overflow-hidden">
      {/* Inject styles for the animation */}
      <style>{animationStyles}</style>
      {/* Background Layer removed for empty background */}
      {/* ...rest of the Hero section... */}
    </section>
  );
}