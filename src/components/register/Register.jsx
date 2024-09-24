// import styles from "./register.module.css";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    console.log(formData.get("file"));
    // axios.post("Back-End-Link", formData).then().catch();
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleRegister(e);
        }}
      >
        <input type="text" placeholder="Username" name="username" />
        <input type="password" placeholder="Password" name="password" />
        <input type="email" placeholder="Email" name="email" />
        <input type="text" placeholder="Address" name="address" />
        <input type="number" placeholder="Phone" name="phone" />
        <input type="file" name="file" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
