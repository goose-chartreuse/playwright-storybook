export const createStorybookUrl = ({
  baseUrl = "http://localhost:6006",
  id,
  globals = "",
  args = "",
  viewMode = "story",
}) => {
  return `${baseUrl}/iframe.html?globals=${globals}&args=${args}&id=${id}&viewMode=${viewMode}`;
};
