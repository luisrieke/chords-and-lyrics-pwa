export const increaseFontSize = () => {
  const paragraphs = document.querySelectorAll(".text-container p");
  paragraphs.forEach((paragraph) => {
    const style = window
      .getComputedStyle(paragraph, null)
      .getPropertyValue("font-size");
    const currentSize = parseFloat(style);
    paragraph.style.fontSize = `${currentSize + 1}px`;
  });
};

export const decreaseFontSize = () => {
  const paragraphs = document.querySelectorAll(".text-container p");
  paragraphs.forEach((paragraph) => {
    const style = window
      .getComputedStyle(paragraph, null)
      .getPropertyValue("font-size");
    const currentSize = parseFloat(style);
    paragraph.style.fontSize = `${currentSize - 1}px`;
  });
};
