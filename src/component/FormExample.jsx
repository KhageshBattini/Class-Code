import React, { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "no",
};

const FormExample = () => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (event) => {
    // console.log(event.target);
    const { name, value } = event.target;
    console.log(name, value);
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialValue);
  };
  return (
    <div>
      <form action="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="UserName"
          onChange={handleChange}
          name="userName"
          value={formState.userName}
        />
        <select
          id=""
          onChange={handleChange}
          name="country"
          value={formState.country}
        >
          <option value="">select country</option>
          <option value="india">India</option>
          <option value="china">China</option>
          <option value="usa">USA</option>
        </select>
        <label htmlFor="">
          <input
            type="radio"
            onChange={handleChange}
            value="yes"
            name="isMarried"
            checked={formState.isMarried === "yes"}
          />
          yes
        </label>

        <label htmlFor="">
          <input
            type="radio"
            onChange={handleChange}
            value="no"
            name="isMarried"
            checked={formState.isMarried === "no"}
          />
          no
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};

export default FormExample;
