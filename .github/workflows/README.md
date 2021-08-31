# Docs Deployment Workflows

This repo contains three workflows which manage the processing and deployment of the docs.

## `deploy-site.yml`: Deploy docs site via GitHub Pages

Regenerate the static site when changes are made to the `main` branch, and push it to GitHub Pages. This workflow checks out the branch, runs the appropriate `hugo` command, and then pushes it to the `gh-pages` branch.

## `push-staging.yml`: Push branches to staging environment

Push changes to non-`main` branches to a separate staging repository where they will be built and deployed.

This workflow doesn't actually handle the building of the site for the staging repo. Instead, it checks out the working branch and the main branch from the staging repo, copies the workflows from the staging repo to the working branch, and pushes the result to the staging repo. At that point, the workflows that have been added to the newly-pushed staging branch will build the Hugo site and deploy it in-place.

## `process-api-update.yml`: Process raw API docs update

When the source repo pushes new unprocessed XML-based API docs to this repository, this workflow will process them into a form Hugo can use before pushing the result to the staging repo.

The bulk of the logic for this workflow is run in a Docker container. [The Docker image](https://github.com/Zymbit-Docs/actions-hugoify-api-docs) is built around a script for parsing raw XML-based API docs (generated from code annotations in the source library) and converting them into HTML-based docs that Hugo can render.
