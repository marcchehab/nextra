import type { MarkdownPreprocessor } from 'nextra';

/**
 * Preprocessor for transforming wiki-style links to markdown links
 * - [[page]] becomes [page](page)
 * - [[path/to/page]] becomes [page](path/to/page)
 * - [[page|Custom text]] becomes [Custom text](page)
 */
export const preprocessWikilinks: MarkdownPreprocessor = ({ fileContent }) => {
  // Transform wiki links to markdown links
  return fileContent.replace(
    /\[\[(.+?)(?:\|(.+?))?\]\]/g,
    (match, link, text) => {
      link = link.replace(/(\/)?index$/g, '');
      if (link.length === 0) {
        link = '/';
      }
      if (text) {
        // If text is provided, use it as is: [[page|Custom text]] -> [Custom text](page)
        return `[${text}](${link})`;
      } else {
        // If no text is provided, use the filename from the link: [[path/to/page]] -> [page](path/to/page)
        const filename = link.split('/').pop();
        return `[${filename}](${link})`;
      }
    }
  );
};
