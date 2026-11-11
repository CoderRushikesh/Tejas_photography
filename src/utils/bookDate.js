export const goToInquiry = (prefill = {}) => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  window.dispatchEvent(new CustomEvent('prefill-inquiry', { detail: prefill }));
};