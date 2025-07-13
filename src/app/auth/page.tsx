"use client";

import PageLayout from "@/components/layout/PageLayout";
import AuthForm from "@/components/auth/AuthForm";

const AuthPage = () => {
  return (
    <PageLayout>
      <div className="max-w-md mx-auto px-4 py-10 text-white">
        <AuthForm />
      </div>
    </PageLayout>
  );
};

export default AuthPage;
