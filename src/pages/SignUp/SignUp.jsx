import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
   
    const onSubmit = data => {
      console.log(data);
    };

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign up!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi.
            </p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && <span className="text-red-600 font-bold my-4">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && <span className="text-red-600 font-bold my-4">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {required: true,
                                            minLength: 8,
                                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/  
                                          } )}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'minLength' && <span className="text-red-600 font-bold my-4">must be atleast 8 characters</span>}
                {errors.password?.type === 'pattern' && <span className="text-red-600 font-bold my-4">Password must have - atleast 1 - uppercase, lowercase, number and special character. </span>}
                {errors.password?.type === 'required' && <span className="text-red-600 font-bold my-4">Password is required</span>}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Signup"
                />
              </div>
              <p>
                <small>
                  Already have an account ? <Link to="/login" className="font-bold text-sm hover:text-lg transition-all duration-500 ease-out">login</Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;






//stuck at : 06:30