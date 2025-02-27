import type { Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'

/**
 * Remark plugin to transform wiki links to markdown links
 */
export const remarkWikiLinks: Plugin<[], Root> =
  () => (ast) => {
    visit(ast, 'text', (node, index, parent) => {
      // Check if the node contains wiki links
      if (node.value.includes('[[') && parent && index !== undefined) {
        // Transform wiki links to markdown links
        const transformedText = node.value.replace(
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
        
        // Only parse if we actually transformed something
        if (transformedText !== node.value) {
          // Parse the transformed markdown into an MDAST
          const parsedAst = fromMarkdown(transformedText);
          
          // Replace the original node with the parsed nodes
          if (parsedAst.children.length > 0) {
            parent.children.splice(index, 1, ...parsedAst.children);
          }
        }
      }
    });
    
    return ast;
  };