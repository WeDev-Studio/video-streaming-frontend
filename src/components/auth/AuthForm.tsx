"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type AuthMode = "signin" | "signup";

type AuthFormData = {
  email: string;
  password: string;
  confirmPassword?: string;
};

const AuthForm = () => {
  const [mode, setMode] = useState<AuthMode>("signin");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthFormData>();

  const onSubmit = (data: AuthFormData) => {
    if (mode === "signin") {
      console.log("Sign In:", data);
      // TODO: integrate Cognito signIn here
    } else {
      console.log("Sign Up:", data);
      // TODO: integrate Cognito signUp here
    }
  };

  const password = watch("password");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center">
        {mode === "signin" ? "Sign In" : "Create an Account"}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Minimum 8 characters" },
            })}
            className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700"
          />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {mode === "signup" && (
          <div>
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700"
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-white text-black font-semibold px-4 py-2 rounded hover:opacity-90"
        >
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <p className="text-center text-sm text-gray-400">
        {mode === "signin" ? (
          <>
            Don’t have an account?{" "}
            <button
              onClick={() => setMode("signup")}
              className="text-blue-400 hover:underline"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              onClick={() => setMode("signin")}
              className="text-blue-400 hover:underline"
            >
              Sign In
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForm;
