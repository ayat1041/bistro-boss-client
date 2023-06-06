import { useContext } from "react";
import { ImGoogle3 } from "react-icons/im";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
      };
      fetch(`http://localhost:5000/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
            navigate(from, { replace: true });
        });
    });
  };

  return (
    <div className="text-center pb-6">
      <div className="divider"></div>
      <button onClick={handleGoogleSignIn} className="btn btn-circle">
        <ImGoogle3 className="text-2xl hover:text-4xl hover:rotate-[360deg] transition-all duration-200 ease-in" />
      </button>
    </div>
  );
};

export default SocialLogin;
