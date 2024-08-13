import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const poetryDirectory = path.join(process.cwd(), 'poetry')

export function getSortedPoetryData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(poetryDirectory)
    const allPoetryData = fileNames.map(fileName => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(poetryDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...(matterResult.data as { date: string; title: string })
        }
    })
    // Sort posts by date
    return allPoetryData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllPoetryIds() {
    const fileNames = fs.readdirSync(poetryDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPoetryData(id: string) {
    const fullPath = path.join(poetryDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id and contentHtml
    return {
        id,
        content: matterResult.content,
        ...(matterResult.data as { date: string; title: string })
    }
}
