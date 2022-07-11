// Check if an element is partially or completely visible in viewport
// consider only top element position
const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const images = document.querySelector("#images");

const showImages = () => {
  const showImages = isElementInViewport(images);

  if (showImages)
    import(
      /* webpackPrefetch: true */
      "./images"
    );
};

window.addEventListener("scroll", showImages);
