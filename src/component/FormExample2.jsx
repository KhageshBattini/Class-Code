import React, { useState } from "react";

let initialValue = {
  userName: "",
  country: "",
  isMarried: "",
  favColors: [
    { color: "Red", checked: false },
    { color: "Blue", checked: false },
    { color: "Green", checked: false },
  ],
};

const FormExample = () => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = (event, index) => {
    // console.log(event.target);
    const { name, value, checked } = event.target;

    if (name === "favColors") {
      const newFavColors = [...formState.favColors];
      newFavColors[index].checked = checked;

      setFormState({ ...formState, favColors: newFavColors });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialValue);
  };
  console.log("render");
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
        <br />
        {formState.favColors.map((colorObj, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                name="favColors"
                checked={colorObj.checked}
                onChange={(event) => handleChange(event, index)}
              />

              {colorObj.color}
            </label>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormExample;
