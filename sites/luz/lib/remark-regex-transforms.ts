/**
 * A remark plugin that applies regex transformations to markdown content
 * @param {Object} options - Plugin options
 * @param {Array<{pattern: RegExp, replacement: string|Function}>} options.replacements - Array of regex patterns and replacements
 */
export function remarkRegexTransform(options = { replacements: [] }) {
    return (tree, file) => {
      // Access the raw markdown content
      const content = file.value;
      
      // Apply each regex replacement
      let transformedContent = content;
      
      options.replacements.forEach(({ pattern, replacement }) => {
        transformedContent = transformedContent.replace(pattern, replacement);
      });
      
      // Update the file value with the transformed content
      file.value = transformedContent;
      return tree;
    };
  }