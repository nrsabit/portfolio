import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { backednUrl } from "../../../../constants";
import { getToken } from "../../../../utils/auth.services";

const AddProject = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { image, ...restData } = data;
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("data", JSON.stringify(restData));

    await fetch(`${backednUrl}/projects`, {
      method: "POST",
      headers: {
        Authorization: getToken() as string,
      },
      body: formData,
    })
      .then(async (res) => {
        reset();
        const result = await res.json();
        console.log(result);
        Swal.fire({
          title: "Project added successfully",
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
      <h2 className="text-4xl font-bold  text-center my-10">Add a Project</h2>
      <div className="w-full md:w-3/5 mx-auto p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Project Name<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Project Name"
              {...register("name", { required: true })}
              name="name"
              className="input input-bordered"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 mt-2">Project Name is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Live Link<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Link Here"
              {...register("liveLink", { required: true })}
              name="liveLink"
              className="input input-bordered bg-base-200"
            />
            {errors.liveLink?.type === "required" && (
              <p className="text-red-500 mt-2">Live Link is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Frontend Link<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Frontend Link"
              {...register("frontendLink", { required: true })}
              name="frontendLink"
              className="input input-bordered bg-base-200"
            />
            {errors.frontendLink?.type === "required" && (
              <p className="text-red-500 mt-2">Frontend Link is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Backend Link<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Backend Link"
              {...register("backendLink", { required: true })}
              name="backendLink"
              className="input input-bordered"
            />
            {errors.backendLink?.type === "required" && (
              <p className="text-red-500 mt-2">Backend Link is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Description<span className="text-red-500">*</span>
              </span>
            </label>
            <textarea
              placeholder="Type Description"
              {...register("description", { required: true })}
              name="description"
              className="input input-bordered"
            />
            {errors.description?.type === "required" && (
              <p className="text-red-500 mt-2">Description is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Project Image<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input bg-[#c6ab7c]  file-input-bordered w-full max-w-xs"
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary text-[#c6ab7c] bg-[#213644] hover:bg-[#747161] border-0"
              type="submit"
              value="Add Project"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
