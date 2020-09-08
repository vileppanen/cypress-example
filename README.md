# react-cypress-template

This project contains template example on including Cypress with an actual React client project.
It also provides a simplistic setup for integrating with [Percy](https://percy.io/) (a platform for visual validation review process, that can be hooked into CI pipelines and GitHub).

Currently, it demonstrates simple testing examples to verify, that the application UI should fulfill certain requirements.

## Tests

The project inhabits both **functional** and **visual** tests, under `cypress/integration` folder.

### functional

This folder inhabits functional UI tests, to demonstrate how certain aspects of an app structure can be verified. However, as this might grow cumbersome to maintain in the long run and with larger projects, verifying layout changes and breakages might be more useful to do with visual validation.

More useful is to provide functional tests for verifying the UI workflow.

## Usage

First, run `npm ci`

### Development mode

1. On one terminal, start the local dev server for the `demo-app` by running `npm run demo-app`
2. On second terminal, start the Cypress server by running `npm run cypress:open`
3. Both servers use hot-reloading, go on and start hacking!

### Single run in terminal

1. On one terminal, start the local dev server for the `demo-app` by running `npm run demo-app`

2. On second terminal, start the Cypress server by running `npm run cypress`
