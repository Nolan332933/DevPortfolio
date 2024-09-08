const apiResponse = (success, message, data = null, errorMsg = null) => {
  return JSON.stringify({
    success,
    message,
    data: data,
    error: errorMsg,
  });
};

export default apiResponse;
