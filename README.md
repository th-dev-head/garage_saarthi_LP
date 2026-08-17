# GarageSaarthi Landing Page (LP)

This is the repository for the **GarageSaarthi** landing page. It is built using **Next.js** with a static export configuration, optimized for performance and SEO.

## 🚀 Tech Stack

* **Framework:** Next.js (Static HTML Export)
* **Library:** React
* **Styling:** Tailwind CSS & Custom CSS
* **Icons:** Lucide React & React Icons
* **UI Components:** Material UI (MUI)

## 🛠️ Development Scripts

Run the following commands in the project root directory:

### Run Development Server
```bash
npm run dev
```
Starts the development server on `http://localhost:5173`.

### Build & Export Production Bundle
```bash
npm run build
```
Generates a highly optimized static HTML export under the `dist` directory (by compiling and copying the `out` output).

### Lint Codebase
```bash
npm run lint
```
Checks for code quality and style guidelines.

## 🌐 SEO & Configurations

* **Canonical Domain:** `https://www.garagesaarthi.com/` (Always use `www` version for links and page alternates).
* **Robots & Sitemap:** `public/robots.txt` points to `public/sitemap.xml`.
* **Security Info:** RFC 9116 compliant security parameters are defined in `public/.well-known/security.txt`.
* **Redirection:** `.htaccess` file in `public` handles non-www to `www` redirection on Apache environments.
