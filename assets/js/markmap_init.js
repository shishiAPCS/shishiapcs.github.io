document.addEventListener("DOMContentLoaded", function () {
    const markmapContainers = document.querySelectorAll(".markmap-container");
  
    markmapContainers.forEach((container) => {
      const markdownContent = container.dataset.markdownContent;
      const markmapInstance = Markmap.create(container, {}, markdownContent);
    });
  });
  