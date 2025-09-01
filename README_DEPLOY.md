
# Circlish — GitHub Pages Deployment

This bundle contains:
- `vite.config.ts` updated with `base: '/circlish/'`
- GitHub Actions workflow at `.github/workflows/pages.yml`

## How to use

1. **Download and unzip** this bundle in your repository root so that it overwrites:
   - `vite.config.ts`
   - `.github/workflows/pages.yml`

2. Commit and push:
   ```bash
   git add -A
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. In GitHub:
   - Go to **Settings → Pages**.
   - In **Source**, choose **GitHub Actions**.

4. Wait for the workflow to finish (Actions tab). Your site will be live at:
   `https://bayrakdaralper.github.io/circlish/`

> If your repository name is different, update `base: '/<repo-name>/'` in `vite.config.ts` accordingly.
