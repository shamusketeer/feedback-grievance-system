import React, { useState } from "react";
import "./App.css";

const FeedbackForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    restaurantCleanliness: "",
    diningExperience: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "Name is required";
    tempErrors.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Email is invalid";
    tempErrors.phone = /^\d{10}$/.test(formData.phone)
      ? ""
      : "Phone is invalid";
    tempErrors.serviceQuality = formData.serviceQuality ? "" : "Required";
    tempErrors.beverageQuality = formData.beverageQuality ? "" : "Required";
    tempErrors.restaurantCleanliness = formData.restaurantCleanliness
      ? ""
      : "Required";
    tempErrors.diningExperience = formData.diningExperience ? "" : "Required";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onFormSubmit(formData);
      alert("Thank you for completing the information");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceQuality: "",
        beverageQuality: "",
        restaurantCleanliness: "",
        diningExperience: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Aromatic Bar</h2>
      <p>
        We are committed to providing you with the best dining experience
        possible, so we welcome your comments. Please fill out this
        questionnaire. Thank you.
      </p>
      <div>
        <label>Customer Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>
      <div>
        <label>
          Please rate the quality of the service you received from your host:
        </label>
        <div>
          <input
            type="radio"
            name="serviceQuality"
            value="Excellent"
            onChange={handleChange}
          />{" "}
          Excellent
          <input
            type="radio"
            name="serviceQuality"
            value="Good"
            onChange={handleChange}
          />{" "}
          Good
          <input
            type="radio"
            name="serviceQuality"
            value="Fair"
            onChange={handleChange}
          />{" "}
          Fair
          <input
            type="radio"
            name="serviceQuality"
            value="Bad"
            onChange={handleChange}
          />{" "}
          Bad
        </div>
        {errors.serviceQuality && <span>{errors.serviceQuality}</span>}
      </div>
      <div>
        <label>Please rate the quality of your beverage:</label>
        <div>
          <input
            type="radio"
            name="beverageQuality"
            value="Excellent"
            onChange={handleChange}
          />{" "}
          Excellent
          <input
            type="radio"
            name="beverageQuality"
            value="Good"
            onChange={handleChange}
          />{" "}
          Good
          <input
            type="radio"
            name="beverageQuality"
            value="Fair"
            onChange={handleChange}
          />{" "}
          Fair
          <input
            type="radio"
            name="beverageQuality"
            value="Bad"
            onChange={handleChange}
          />{" "}
          Bad
        </div>
        {errors.beverageQuality && <span>{errors.beverageQuality}</span>}
      </div>
      <div>
        <label>Was our restaurant clean?</label>
        <div>
          <input
            type="radio"
            name="restaurantCleanliness"
            value="Excellent"
            onChange={handleChange}
          />{" "}
          Excellent
          <input
            type="radio"
            name="restaurantCleanliness"
            value="Good"
            onChange={handleChange}
          />{" "}
          Good
          <input
            type="radio"
            name="restaurantCleanliness"
            value="Fair"
            onChange={handleChange}
          />{" "}
          Fair
          <input
            type="radio"
            name="restaurantCleanliness"
            value="Bad"
            onChange={handleChange}
          />{" "}
          Bad
        </div>
        {errors.restaurantCleanliness && (
          <span>{errors.restaurantCleanliness}</span>
        )}
      </div>
      <div>
        <label>Please rate your overall dining experience:</label>
        <div>
          <input
            type="radio"
            name="diningExperience"
            value="Excellent"
            onChange={handleChange}
          />{" "}
          Excellent
          <input
            type="radio"
            name="diningExperience"
            value="Good"
            onChange={handleChange}
          />{" "}
          Good
          <input
            type="radio"
            name="diningExperience"
            value="Fair"
            onChange={handleChange}
          />{" "}
          Fair
          <input
            type="radio"
            name="diningExperience"
            value="Bad"
            onChange={handleChange}
          />{" "}
          Bad
        </div>
        {errors.diningExperience && <span>{errors.diningExperience}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
