import { createReadStream, existsSync } from "node:fs"
import { createServer } from "node:http"
import { extname, join, normalize } from "node:path"

const port = Number(process.env.PORT || 4173)
const root = process.cwd()

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
}

createServer((request, response) => {
  const pathname = new URL(request.url ?? "/", "http://localhost").pathname
  const requestedPath = pathname === "/" ? "/index.html" : pathname
  const safePath = normalize(requestedPath).replace(/^(\.\.[/\\])+/, "")
  let filePath = join(root, safePath)

  if (!existsSync(filePath)) {
    filePath = join(root, "index.html")
  }

  response.writeHead(200, {
    "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
  })
  createReadStream(filePath).pipe(response)
}).listen(port, () => {
  console.log(`LevelCorp frontend demo: http://localhost:${port}`)
})
