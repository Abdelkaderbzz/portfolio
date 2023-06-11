const observeElement = (
  element: HTMLElement,
  callback: IntersectionObserverCallback
) => {
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin
    threshold: 0.5, // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
};

export default observeElement;
