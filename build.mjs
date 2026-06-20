import { cpSync, mkdirSync, rmSync } from "node:fs"
import { join } from "node:path"

const output = join(process.cwd(), "dist")

rmSync(output, { force: true, recursive: true })
mkdirSync(output, { recursive: true })

for (const file of ["index.html", "styles.css", "app.js"]) {
  cpSync(join(process.cwd(), file), join(output, file))
}

console.log("LevelCorp frontend demo pronta em dist/")
