"use client";

import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

type UploadFormData = {
  title: string;
  description: string;
  file: FileList;
};

const UploadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger,
  } = useForm<UploadFormData>();

  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (data: UploadFormData) => {
    console.log("Uploading:", data);
    //   const file = data.file[0];

    // TODO: call upload API or S3 logic here
    alert(`Video "${data.title}" ready for upload!`);

    reset();
    setPreview(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      if (e.target.files) {
        setValue("file", e.target.files); // update RHF value
      }
      trigger("file"); // re-trigger validation manually
    }
  };

  const handleClearFile = () => {
    setPreview(null);
    setValue("file", {} as FileList); // clears hook-form state
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // clears actual input
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Title */}
      <div>
        <label className="block mb-1 font-medium">Video Title</label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700"
        />
        {errors.title && (
          <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea
          {...register("description", { required: "Description is required" })}
          rows={4}
          className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700"
        />
        {errors.description && (
          <p className="text-sm text-red-500 mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* File Input */}
      <div>
        <label className="block mb-1 font-medium">Video File</label>
        <input
          type="file"
          accept="video/*"
          {...register("file", { required: "Video file is required" })}
          onChange={handleFileChange}
          ref={fileInputRef}
          className="w-full px-2 py-1 text-white bg-zinc-800 rounded border border-zinc-700"
        />
        {errors.file && (
          <p className="text-sm text-red-500 mt-1">{errors.file.message}</p>
        )}
      </div>

      {/* Video Preview + Clear */}
      {preview && (
        <div className="mt-4 relative">
          <video
            src={preview}
            controls
            className="w-full rounded aspect-video object-cover"
          />

          {/* ❌ Clear (X) button */}
          <button
            type="button"
            onClick={handleClearFile}
            className="absolute top-2 right-2 text-lg cursor-pointer bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 flex items-center justify-center z-10"
            title="Remove video"
          >
            &times;
          </button>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="bg-white text-black font-medium px-4 py-2 rounded hover:opacity-90"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;
