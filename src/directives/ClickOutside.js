export default {
  bind(el, binding) {
    const bubble = binding.modifiers.bubble;
    const handler = event => {
      if (bubble || (!el.contains(event.target) && el !== event.target)) {
        binding.value(event);
      }
    }
    // Store the listener to element so we can remove it later
    el.clickOutside = handler;

    document.addEventListener('click', handler);
  },
  unbind(el) {
    document.removeEventListener('click', el.clickOutside);
    el.clickOutside = null;
  },
};
