import { useState } from "react";

function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    phoneType: "",
    staff: "Instructor",
    bio: "",
    emailNotifications: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};

    if (user.name.length === 0) {
      errors.name = "Name is required";
    }
    if (user.email.length === 0) {
      errors.email = "Email is required";
    }
    if (!user.email.includes("@")) {
      errors.email ="Incorrect Email format" ;
    }
    if (user.phoneNumber && !user.phoneNumber.includes("-")) {
      errors.phoneNumber = "Incorrect phone number format";
    }
    if (user.phoneNumber && !user.phoneType) {
      errors.phoneType = "Must specify phone type";
    }
    if (user.bio.length > 280) {
      errors.bio = "Bio cannot exceed 280 characters";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const errorsVariable = validate()
    setErrors(errorsVariable)
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.currentTarget.value })}
        />
      </label>
      {errors.name ? <p className="error" >{errors.name}</p> : ""}
      <br />
      <label>
        Email
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.currentTarget.value })}
        />
      </label>
      {errors.email ? <p className="error" >{errors.email}</p> : ""}

      <br />
      <label>
        Phone Number
        <input
          type="text"
          placeholder="Phone Number"
          value={user.phoneNumber}
          onChange={(e) =>
            setUser({ ...user, phoneNumber: e.currentTarget.value })
          }
        />
      </label>
      {errors.phoneNumber ? <p className="error" >{errors.phoneNumber}</p> : ""}

      <br />
      <label>
        Phone Type
        <select
          name="phoneType"
          value={user.phoneType}
          onChange={(e) =>
            setUser({ ...user, phoneType: e.currentTarget.value })
          }
        >
          <option value="">Please select an option</option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
      </label>
      {errors.phoneType ? <p className="error" >{errors.phoneType}</p> : ""}

      <br />
      <label>
        Staff
        <input
          type="radio"
          name="Staff"
          value="Instructor"
          checked={user.staff === "Instructor" ? true : false}
          onChange={(e) => setUser({ ...user, staff: e.currentTarget.value })}
        />
        Instructor
        <input
          type="radio"
          name="Staff"
          value="Student"
          checked={user.staff === "Student" ? true : false}
          onChange={(e) => setUser({ ...user, staff: e.currentTarget.value })}
        />
        Student
      </label>
      
      <br />
      <label>
        Bio
        <textarea
          name="Bio"
          cols="30"
          rows="10"
          value={user.bio}
          onChange={(e) => setUser({ ...user, bio: e.currentTarget.value })}
        ></textarea>
      </label>
      {errors.bio ? <p className="error" >{errors.bio}</p> : ""}

      <br />
      <label>
        Email notifications
        <input
          type="checkbox"
          name="emailNotifications"
          value={user.emailNotifications}
          checked={user.emailNotifications}
          onChange={(e) => setUser({ ...user, bio: e.currentTarget.value })}
        />
      </label>
      <input type="submit"  value="submit"/>
    </form>
  );
}

export default Form;
