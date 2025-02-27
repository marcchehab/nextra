import path from 'path'
import fs from 'graceful-fs'
import type { Image, Root } from 'mdast'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { logger, searchFileInSubdirectories } from '../utils'

export const remarkPathCorrections: Plugin<[{ filePath: string }], Root> =
    ({ filePath }) =>
    ast => {
        visit(ast, 'image', (node: Image) => {
            if (!node.url.startsWith('http') && node.url.endsWith('.mp4')) {
                logger.info('🙈 A local mp4 file has not been found?', node)
            }
            if (node.url) {
                const basePath = path.dirname(filePath)
                let resolvedPath = path.resolve(basePath, node.url)

                if (!fs.existsSync(resolvedPath)) {
                    // logger.info('🔍 Resolving', node.url, 'in', filePath)
                    const foundPath = searchFileInSubdirectories(
                        basePath,
                        path.basename(node.url)
                    )
                    if (foundPath) {
                        node.url = path.relative(basePath, foundPath)
                        // logger.info('✅ Resolved path to', node.url)
                    } else {
                        logger.warn(`⚠️ Could not resolve path ${node.url}`)
                        node.url = '/img/no-image.svg'
                    }
                }

                if (!node.url.startsWith('.') && !node.url.startsWith('/')) {
                    node.url = `./${node.url}`
                }
            }
        })
    }
