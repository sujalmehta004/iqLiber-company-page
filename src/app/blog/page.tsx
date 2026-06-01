import React from "react";
import PageShell from "@/components/PageShell";
import BlogsComponent from "@/components/Blogs";

export const metadata = {
  title: "Blog | IQ Liber — Ideas that Inspire",
  description: "Expert insights on software development, digital marketing, web technology, and AI automation from the IQ Liber team.",
};

export default function BlogPage() {
  return (
    <PageShell>
      <div className="pt-8" style={{ background: "linear-gradient(170deg, #f4f0ff 0%, #fdfbff 50%, #fff5f8 100%)", minHeight: "100vh" }}>
        <BlogsComponent />
      </div>
    </PageShell>
  );
}
