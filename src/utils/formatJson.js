export const formatJson = (data) => {
  const unescapedString = data.replace(/\\/g, ""); // Remove backslashes
  const jsonObject = JSON.parse(unescapedString);
  console.log(jsonObject);
  return jsonObject;
};
