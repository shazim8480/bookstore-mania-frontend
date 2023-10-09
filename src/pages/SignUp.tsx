import { SignUpForm } from "@/components/SignUpForm";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
        <SignUpForm />

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to={"/login"}
            className="font-semibold leading-6 ml-3 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
