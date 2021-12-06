const validateTimeInput = (newTime, limit) => {
  if (newTime < 0) {
    return 0 + "";
  } else if (newTime > limit) {
    return limit + "";
  } else {
    return (newTime + "").replace(/[^\d]/g, "") || "0";
  }
};

export default validateTimeInput;
