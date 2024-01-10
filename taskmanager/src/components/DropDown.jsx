import React, { useState } from "react";
import styles from "../styles/DropDown.module.css";

const DropDown = () => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <div className={styles.StatusCon}>
      <label htmlFor="status">Status</label>
      <select
        id="status"
        name="status"
        value={selectedStatus}
        onChange={handleStatusChange}
      >
        <option value="" disabled>
          Task State
        </option>
        <option value="option1">Todo</option>
        <option value="option2">Doing</option>
        <option value="option2">Done</option>
        <option value="option2">Later</option>
      </select>
    </div>
  );
};

export default DropDown;
