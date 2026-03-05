export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-20">
      <img
        src="/preview/www.sssksolutions.co.za.webp"
        alt="SSSK Environmental Services Website Preview"
        style={{ maxWidth: 800, borderRadius: 16, marginBottom: 32 }}
      />
      <a
        href="https://sssksolutions.co.za"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-[#e7fe56] text-black font-bold rounded-full text-lg shadow-lg hover:bg-[#d6e94d] transition"
      >
        Visit SSSK Environmental Services Website
      </a>
    </div>
  );
}
