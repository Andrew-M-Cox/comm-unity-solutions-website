import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - CommUnity Solutions",
  description: "Learn more about CommUnity Solutions",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About CommUnity Solutions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              This page is coming soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
