import path from 'path'
import fs from 'graceful-fs'

// Helper function to recursively search for a file in subdirectories
export const searchFileInSubdirectories = (
    baseDir: string,
    targetFile: string
  ): string | null => {
    const filesAndFolders = fs.readdirSync(baseDir)
    for (const item of filesAndFolders) {
      const fullPath = path.join(baseDir, item)
      const stat = fs.lstatSync(fullPath)
  
      if (stat.isDirectory()) {
        const foundPath = searchFileInSubdirectories(fullPath, targetFile)
        if (foundPath) return foundPath
      } else if (path.basename(fullPath) === targetFile) {
        return fullPath
      }
    }
    return null
  }
  
  export const logger = {
    info: console.log.bind(null, '-', '\x1b[36minfo\x1b[0m', '[nextra]'),
    warn: console.log.bind(null, '-', '\x1b[33mwarn\x1b[0m', '[nextra]'),
    error: console.log.bind(null, '-', '\x1b[31merror\x1b[0m', '[nextra]')
  }