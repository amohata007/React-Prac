import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err, "error");
  return (
    <div>
      <h3>OOPS..!!</h3>
      <h4>Page not Found</h4>
      <h3>{err.data}</h3>
    </div>
  );
};

export default Error;
