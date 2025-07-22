import { useEffect, useState } from "react";
import certificateUrl from "../assets/certificate.pdf";
const CertificatePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   const certificateUrl = "/certificates/sample_certificate.pdf";

  return (
    <section className="min-h-screen bg-[var(--brand-bg)] text-[var(--brand-text)] py-16 px-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          🎖 Official Certificate Preview
        </h1>
        <p className="text-lg">
          Here's a sample of what you'll receive upon completing your program at
          MEDTECH INSTITUTE. This certificate is a testament to your hard work,
          commitment, and growth.
        </p>
      </div>

      {/* PDF Viewer */}
      <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-4 border border-orange-400">
        {isMobile ? (
          <div className="text-center space-y-4">
            <p className="text-sm md:text-base">
              📱 Your device doesn't support embedded PDFs. Please{" "}
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-orange-500"
              >
                click here to view the certificate
              </a>{" "}
              in a new tab.
            </p>
            <a
              href={certificateUrl}
              download
              className="inline-block px-4 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition"
            >
              ⬇️ Download Certificate (PDF)
            </a>
          </div>
        ) : (
          <iframe
            title="Certificate PDF"
            src={certificateUrl}
            className="w-full h-[80vh] rounded-md border dark:border-zinc-700"
          />
        )}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-orange-400 font-semibold text-lg italic mb-4">
          “Your future is one certificate away. Keep learning. Keep rising.”
        </p>
        <a
          href="/courses"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 transition"
        >
          🎓 Explore Our Courses
        </a>
      </div>
    </section>
  );
};

export default CertificatePage;
