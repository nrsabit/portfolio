import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { backednUrl } from "../../../../constants";
import { getToken } from "../../../../utils/auth.services";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddBlog = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    await fetch(`${backednUrl}/blogs/create-blog`, {
      method: "POST",
      headers: {
        Authorization: getToken() as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        reset();
        const result = await res.json();
        console.log(result);
        Swal.fire({
          title: "Blog added successfully",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate("/dashboard", { replace: true });
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold  text-center my-10">Add Blog</h2>
      <div className="w-full md:w-3/5 mx-auto p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Title<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Title"
              {...register("title", { required: true })}
              name="title"
              className="input input-bordered"
            />
            {errors.title?.type === "required" && (
              <p className="text-red-500 mt-2">Title is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Category<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Category Here"
              {...register("category", { required: true })}
              name="category"
              className="input input-bordered bg-base-200"
            />
            {errors.category?.type === "required" && (
              <p className="text-red-500 mt-2">Category is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Description<span className="text-red-500">*</span>
              </span>
            </label>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <ReactQuill
                  {...field}
                  theme="snow"
                  style={{ height: "150px" }}
                />
              )}
            />
            {errors.descriptiion?.type === "required" && (
              <p className="text-red-500 mt-2">Description is required</p>
            )}
          </div>
          <div className="form-control mt-14">
            <input
              className="btn btn-primary text-[#c6ab7c] bg-[#213644] hover:bg-[#747161] border-0"
              type="submit"
              value="Add Blog"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
