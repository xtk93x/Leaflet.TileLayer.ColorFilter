# Development Guide

This document outlines the setup and workflow for developing this project.

## Project Setup

To get started, clone the repository and install the necessary dependencies.

```bash
# Clone the repository
git clone https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter.git

# Navigate to the project directory
cd Leaflet.TileLayer.ColorFilter

# Install dependencies
npm install
```

## Build Process

The project uses Rollup to bundle the source files. To build the project, run the following command:

```bash
npm run build
```

This will generate the distribution files in the `dist/` directory.

## Running Examples

To test changes, run a local web server to view the example files.

```bash
python3 -m http.server
```

Then, open a browser and navigate to `http://localhost:8000/example/` to see the different use cases.

## Release Workflow

This section outlines the process for releasing a new version of the plugin.

### 1. Branching Strategy

All new features and bug fixes should be developed on a separate feature branch.

```bash
# Create a new branch from the main branch
git checkout -b my-new-feature master
```

Once development is complete, merge the feature branch back into `master`. The `master` branch should always reflect the latest stable code.

```bash
# Switch to the main branch
git checkout master

# Merge the feature branch
git merge my-new-feature
```

### 2. Versioning

This project follows Semantic Versioning (SemVer). When preparing a new release, decide on the version number based on the changes:

-   **MAJOR** (`v1.0.0` -> `v2.0.0`): For incompatible API changes (breaking changes). When a major version is released, users will not automatically upgrade to it by running `npm update`. They must explicitly install the new version (e.g., `npm install leaflet.tilelayer.colorfilter@2.0.0`) to avoid breaking their existing code.
-   **MINOR** (`v1.1.0` -> `v1.2.0`): For adding functionality in a backward-compatible manner.
-   **PATCH** (`v1.1.1` -> `v1.1.2`): For backward-compatible bug fixes.

### 3. Pre-Release Checklist

Before publishing a new version, ensure the following steps are completed:

-   **Update Documentation**:
    -   Update `CHANGELOG.md` with all notable changes for the new version.
    -   Review `README.md` to ensure all examples and instructions are still accurate.
-   **Verify `package.json`**:
    -   Check that fields like `name`, `main`, `module`, and `files` are correct. Do not manually edit the `version` field; it is managed automatically by the `npm version` command during the deployment step.
-   **Final Testing**:
    -   Run the build process (`npm run build`) to ensure it completes without errors.
    -   Test the examples in `example/` to confirm the plugin works as expected.

### 4. Deployment to NPM

After completing the checklist and merging all changes into the `master` branch, follow these steps to publish:

1.  **Ensure `master` is up-to-date:**
    ```bash
    git checkout master
    git pull origin master
    ```

2.  **Bump the version:**
    Use `npm version` to update the version number in `package.json` and create a version commit and tag.
    ```bash
    # For a patch release
    npm version patch

    # For a minor release
    npm version minor

    # For a major release
    npm version major
    ```

3.  **Push the changes and tags:**
    ```bash
    git push origin master --follow-tags
    ```

4.  **Verify NPM login:**
    ```bash
    npm whoami || npm login
    ```

5.  **Perform a dry run (Optional but Recommended):**
    Before publishing, you can perform a dry run to see which files will be included in the package.
    ```bash
    npm publish --dry-run
    ```

6.  **Publish to NPM:**
    ```bash
    npm publish
    ```

## Tooling

This project uses a minimal set of tools to keep things simple.

-   **Rollup**: A module bundler for JavaScript. The `rollup.config.js` file is configured to generate two different output files from the same source (`src/leaflet-tilelayer-colorfilter.js`):
    -   `dist/leaflet-tilelayer-colorfilter.min.js`: An **ES Module (ESM)** bundle. This version is intended for use with modern bundlers or directly in browsers that support `import`. It expects Leaflet to be provided as an external module.
    -   `dist/leaflet-tilelayer-colorfilter-global.min.js`: A **Universal Module Definition (UMD)** bundle. This is the key to supporting older Leaflet versions. It makes the plugin available globally and expects Leaflet to be present as the global `L` object. This file is ideal for direct inclusion in HTML via a `<script>` tag, ensuring compatibility across different Leaflet versions.
-   **@rollup/plugin-terser**: A Rollup plugin that minifies both bundled files to reduce their size for production.

## Dependency Management

This section clarifies how dependencies are managed in `package.json` and addresses common concerns about security alerts.

*   **`devDependencies`**: These are packages needed only for development and building the project, such as `rollup` and `@rollup/plugin-terser`. They are **not** included when a user installs this plugin from NPM. Because of this, security alerts from GitHub for these packages are generally not a concern for end-users, as this development code is not part of the final distributed product.

*   **`peerDependencies`**: `leaflet` is listed as a `peerDependency`. This tells the user's package manager (like NPM) that your plugin requires Leaflet to be installed, but it doesn't install it for them. This is the correct approach for a plugin, as it prevents version conflicts and ensures the user has control over their Leaflet version.

## Implementation Choice

This plugin is designed to be imported for its side effects, which means it modifies Leaflet's `TileLayer` directly rather than exporting a new class. This is why the import is `import 'leaflet-tilelayer-colorfilter';`. This design prevents conflicts with other plugins; if this plugin exported its own `TileLayer` subclass, you couldn't use it with other plugins that do the same. By augmenting the original `TileLayer`, features from multiple plugins can be used together on the same layer.
