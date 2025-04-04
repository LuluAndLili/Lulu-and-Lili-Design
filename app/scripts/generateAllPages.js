import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDocsDir = path.join(__dirname, "../src/docs");

/**
 * Generate an export file with all posts from the specified directories.
 *
 * @param {string[]} postDirectories - Directories to include.
 * @param {string} folder - Folder name inside source docs.
 * @param {string} exportFileName - Name of the export file without extension.
 */
async function generatePages(folder, postDirectories, exportFileName) {
  try {
    const srcPagesDir = path.join(srcDocsDir, folder);
    const outputDir = srcDocsDir;
    const ALL_PAGE_FILE = path.join(outputDir, `${exportFileName}.tsx`);

    const allImports = [];
    const allPosts = {};

    for (const dir of postDirectories) {
      const currentDir = path.join(srcPagesDir, dir);
      const files = await fs.readdir(currentDir);
      const postFiles = files.filter((file) => file.endsWith(".tsx"));

      for (const file of postFiles) {
        const fileName = path.basename(file, ".tsx");
        const importName = `${fileName}`;

        var importPath = "";
        
        if (dir === "") {
          importPath = `./${folder}/${fileName}`;
        } else {
          importPath = `./${folder}/${dir}/${fileName}`;
        }

        allImports.push(`import ${importName} from "${importPath}";`);
        allPosts[`${fileName}`] = importName;
      }
    }

    const importsSection = allImports.join("\n");
    const postsEntries = Object.entries(allPosts)
      .map(([value]) => `  ${value},`)
      .join("\n");

    const allPostsContent = `// Note: This file is autogenerated automatically
${importsSection}

export const ${exportFileName} = {
${postsEntries}
};
`;

    await fs.writeFile(ALL_PAGE_FILE, allPostsContent, "utf8");
    console.log(`${exportFileName}.tsx has been generated successfully.`);
  } catch (error) {
    console.error(`Error generating ${exportFileName}:`, error);
    process.exit(1);
  }
}

generatePages("channels", [""], "AllChannels");
