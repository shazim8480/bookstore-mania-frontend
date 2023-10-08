// "use client";

// import * as React from "react";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useForm } from "react-hook-form";
// import { FcGoogle } from "react-icons/fc";

// type AddBookFormProps = React.HTMLAttributes<HTMLDivElement>;

// interface AddBookFormInputs {
//    authorName: string;
//   email: string;
//   publicationYear: number;
//   genre: string;

// }

// export function AddBookForm({ className, ...props }: AddBookFormProps) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<AddBookFormInputs>();

//   const onSubmit = (data: AddBookFormInputs) => {
//     console.log(data);
//   };

//   return (
//     <div className={cn("grid gap-6", className)} {...props}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid gap-2">
//           <div className="grid gap-1">
//             <Label className="sr-only" htmlFor="email">
//               Email
//             </Label>
//             <Input
//               id="email"
//               placeholder="name@example.com"
//               type="email"
//               autoCapitalize="none"
//               autoComplete="email"
//               autoCorrect="off"
//               {...register("email", { required: "Email is required" })}
//             />
//             {errors.email && <p>{errors.email.message}</p>}
//             <Input
//               id="password"
//               placeholder="your password"
//               type="password"
//               autoCapitalize="none"
//               autoComplete="password"
//               {...register("password", { required: "Password is required" })}
//             />
//             {errors.password && <p>{errors.password.message}</p>}
//           </div>
//           <button className="btn btn-primary mt-3">
//   <Link to="/book-details">Explore Now</Link>
// </button>
//         </div>
//       </form>
//     </div>
//   );
// }
