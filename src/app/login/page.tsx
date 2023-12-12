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
import { useRouter } from "next/navigation";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(10, "Password must be at least 10 characters long"),
});
type TFormData = z.infer<typeof formSchema>;

const Login = () => {
  const [animationParent] = useAutoAnimate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TFormData>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);
  const onSubmit = async (data: TFormData) => {
    try {
      //a timeout to simulate a request
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // throw new Error("Something went wrong");
      console.log(data);
      toast.success("Signed in successfully", {
        position: "top-right",
      });
      router.push("/");
      toast.success("will be configured to redirect to the dashboard", {
        position: "top-left",
      });
    } catch (error) {
      toast.error(`Something went wrong: ${(error as Error).message}`, {
        position: "top-right",
      });
    }
  };
  return (
    <section className="glass flex h-screen w-full flex-col items-center justify-center space-y-5  bg-primary p-10 transition-all duration-300">
      <div className="flex h-fit w-full max-w-[600px] flex-col  items-center rounded-xl bg-base-100 p-10 lg:w-1/2">
        <Link
          href={"/"}
          className=" link-primary link mb-7 flex flex-row items-center space-x-2 self-start text-sm"
        >
          <IoMdArrowBack /> <span>Go to the landing page</span>
        </Link>
        <h1 className="mb-10 flex flex-col items-center space-y-2 text-center text-sm font-light">
          <span>Welcome back to the</span>
          <Image
            className=""
            src={teach_logo}
            height={180}
            width={180}
            alt="teach-logo"
          />
          <span>Academic Competency Tool</span>
        </h1>
        <h2 className="mb-5 text-3xl text-primary">Sign In</h2>
        <form
          ref={animationParent}
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center space-y-4 "
        >
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
              placeholder="e.g a-$ecur3_p@ssowrd"
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <div className="label">
                <span className="label-text text-error">
                  {errors.password.message}
                </span>
              </div>
            )}
            <div className="label flex-col">
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="link-primary link label-text-alt self-end hover:link-hover"
              >
                {!showPassword ? "show password" : "Hide password"}
              </span>
            </div>
          </label>
          <Link
            href={"/forgot-password"}
            className="link text-sm text-gray-400"
          >
            Forgot password?
          </Link>
          <Link href={"/register"} className="text-sm text-gray-400">
            <span>Don&apos;t have an account ? </span>
            <span className="link text-primary">Register</span>
          </Link>
          <button
            disabled={isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            {isSubmitting && <span className="loading loading-spinner"></span>}
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
