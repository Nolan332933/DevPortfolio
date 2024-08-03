import createDOMPurify from "dompurify";
import jsdom from "jsdom";

// sanitize html
const { JSDOM } = jsdom;
const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

// Export a function to sanitize HTML
export const sanitizeHtml = (html) => {
  return DOMPurify.sanitize(html);
};
