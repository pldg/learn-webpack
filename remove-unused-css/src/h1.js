export default (text = "H1 Tag") => {
  const element = document.createElement("h1");

  element.innerHTML = text;
  // Purgecss can detect dynamic added classes
  element.className = "textUnderline";

  return element;
};
