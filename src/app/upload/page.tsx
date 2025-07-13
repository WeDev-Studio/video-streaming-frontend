"use client";

import PageLayout from "@/components/layout/PageLayout";
import UploadForm from "@/components/upload/UploadForm";

const UploadPage = () => {
  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Upload a Video</h1>
        <UploadForm />
      </div>
    </PageLayout>
  );
};

export default UploadPage;
