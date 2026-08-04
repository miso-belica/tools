This repo contains small HTML apps. HTML app is a minimalistic self-contained single-file HTML app using CSS and JS.
1. Prefer modern technology, native CSS over JS and native JS with ESM over external libraries where possible.
2. If you have to use external library for more advanced functionality, ask me which one to choose from potential suggestions. Then download it from CDN Using <script> tag and use it directly.
3. Use URL query parameters to preserve navigation and shareable state.
4. Use `localStorage`/`IndexedDB`/… for persistent state like tokens, secrets or anything tied to the user.
5. Use the File System Access API (`window.showDirectoryPicker()`) to let the user select a folder, then read and/or write image files - principle of least privilege.
6. Make the app mobile friendly - responsive design with progressive enhancements.
7. Code should follow well-known best practices: Verify before you act. Ask for permission, not forgiveness. When in doubt, don't. Minimize blast radius. Principle of least astonishment.
