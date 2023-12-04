"use client";
import Image from "next/image";
import React from "react";
import teach_logo from "@/assets/teach_logo.svg";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from 'next/navigation'


const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(3, "Name must be at least 3 characters long"),
  surname: z.string().min(3, "Surname must be at least 3 characters long"),
  birthdate: z.string(),
  role: z.enum([
    "lecturer",
    "senior-lecturer",
    "associate-professor",
    "professor",
  ]),
  password: z.string().min(10, "Password must be at least 10 characters long"),
});
type TFormData = z.infer<typeof formSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormData>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter()

  const [showPassword, setShowPassword] = React.useState(false);
  const onSubmit = async (data: TFormData) => {
    try {
      let dataWithDateFormated = {
        ...data,
        birthdate: new Date(data.birthdate).toISOString(),
      };
      console.log(dataWithDateFormated);
      //a timeout to simulate a request
      await new Promise((resolve) => setTimeout(resolve, 3000));
      toast.success("Account created successfully", {
        position: "top-right",
      });
      router.push("/")

    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong: ${(error as Error).message}`, {
        position: "top-right",
      });
    }
  };

  if (errors.root)
    toast.error(errors.root.message, {
      position: "top-right",
    });
  return (
    <section className="glass flex h-screen w-full flex-col items-center justify-center space-y-5 bg-primary p-10 transition-all duration-300">
      <div className="flex h-fit w-full max-w-[600px] flex-col  items-center rounded-xl bg-base-100 p-10 lg:w-1/2">
        <Link
          href={"/"}
          className=" link-primary link mb-7 flex flex-row items-center space-x-2 self-start text-sm"
        >
          <IoMdArrowBack /> <span>Go to the landing page</span>
        </Link>
        <h1 className="mb-10 flex flex-col items-center space-y-2 text-center text-sm font-light">
          {/* <span>Welcome back to the</span> */}
          <Image
            className=""
            src={teach_logo}
            height={180}
            width={180}
            alt="teach-logo"
          />
          {/* <span>Academic Competency Tool</span> */}
        </h1>
        <h2 className="mb-5 text-3xl text-primary">Create an account</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center space-y-4 "
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600">
                What is your name ?
              </span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="e.g Heritier"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <div className="label">
                <span className="label-text text-error">
                  {errors.name.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600">
                What is your surname ?
              </span>
            </div>
            <input
              {...register("surname")}
              type="text"
              placeholder="e.g Kaumbu"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.surname && (
              <div className="label">
                <span className="label-text text-error">
                  {errors.surname.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600">
                What is your date of birth ?
              </span>
            </div>
            <input
              {...register("birthdate")}
              type="date"
              // placeholder="heritier"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.birthdate && (
              <div className="label">
                <span className="label-text text-error">
                  {errors.birthdate.message}
                </span>
              </div>
            )}
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your role ?</span>
            </div>
            <select
              {...register("role")}
              className="select select-bordered capitalize"
            >
              <option disabled selected>
                Pick one
              </option>
              <option value={"lecturer"}>lecturer</option>
              <option value={"senior-lecturer"}>senior lecturer</option>
              <option value={"associate-professor"}>associate professor</option>
              <option value={"professor"}>professor</option>
            </select>
            {errors.role && (
              <div className="label">
                <span className="label-text text-error">
                  {errors.role.message}
                </span>
              </div>
            )}
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600">
                What is your email ?
              </span>
            </div>
            <input
              {...register("email")}
              type="email"
              placeholder="e.g hkaumbu@uj.ac.za"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <div className="label">
                <span className="label-text text-error">
                  {errors.email.message}
                </span>
              </div>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-gray-600">
                What is your password ?
              </span>
            </div>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="e.g a-$ecur3_p@ssword"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label flex-col">
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="link-primary link label-text-alt self-end hover:link-hover"
              >
                {!showPassword ? "show password" : "Hide password"}
              </span>
            </div>
            {errors.password && (
              <div className="label">
                <span className="label-text text-error">
                  {errors.password.message}
                </span>
              </div>
            )}
          </label>

          <Link href={"/login"} className="text-sm text-gray-400">
            <span>Already have an account ? </span>
            <span className="link text-primary">Sign in</span>
          </Link>
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            {isSubmitting && <span className="loading loading-spinner"></span>}
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
