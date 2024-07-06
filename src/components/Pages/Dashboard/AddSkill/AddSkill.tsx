import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { backednUrl } from "../../../../constants";
import { getToken } from "../../../../utils/auth.services";

const AddSkill = () => {
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

    await fetch(`${backednUrl}/skills`, {
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
          title: "Skill added successfully",
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
      <h2 className="text-4xl font-bold  text-center my-10">Add a Skill</h2>
      <div className="w-full md:w-3/5 mx-auto p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Skill Name<span className="text-red-500">*</span>
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
              <p className="text-red-500 mt-2">Skill Name is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Level<span className="text-red-500">*</span>
              </span>
            </label>
            <select
              {...register("level", { required: true })}
              name="level"
              className="select select-bordered bg-base-200"
            >
              <option value="">Select Level</option>
              <option value="Expertise">Expertise</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Familiar">Familiar</option>
            </select>
            {errors.level?.type === "required" && (
              <p className="text-red-500 mt-2">Level is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Skill Image<span className="text-red-500">*</span>
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
              value="Add Skill"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSkill;
