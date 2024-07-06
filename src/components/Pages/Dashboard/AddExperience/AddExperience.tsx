import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { backednUrl } from "../../../../constants";
import { getToken } from "../../../../utils/auth.services";

const AddExperience = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    await fetch(`${backednUrl}/experiences/create-experience`, {
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
          title: "Experience added successfully",
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
      <h2 className="text-4xl font-bold  text-center my-10">Add Experience</h2>
      <div className="w-full md:w-3/5 mx-auto p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Company<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Company Name"
              {...register("company", { required: true })}
              name="company"
              className="input input-bordered"
            />
            {errors.company?.type === "required" && (
              <p className="text-red-500 mt-2">Company Name is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Designation<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Designation Here"
              {...register("designation", { required: true })}
              name="designation"
              className="input input-bordered bg-base-200"
            />
            {errors.designation?.type === "required" && (
              <p className="text-red-500 mt-2">Designation is required</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">
                Working Period<span className="text-red-500">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type Working Period "
              {...register("workingPeriod", { required: true })}
              name="workingPeriod"
              className="input input-bordered bg-base-200"
            />
            {errors.workingPeriod?.type === "required" && (
              <p className="text-red-500 mt-2">Working Period is required</p>
            )}
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary text-[#c6ab7c] bg-[#213644] hover:bg-[#747161] border-0"
              type="submit"
              value="Add Experience"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExperience;
