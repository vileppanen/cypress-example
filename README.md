# react-cypress-template

This project contains template example on including Cypress with an actual React client project.
It also provides a simplistic setup for integrating with [Percy](https://percy.io/) (a platform for automating visual validation, that can be hooked into CI pipelines and GitHub).

Currently, it demonstrates simple testing examples to verify, that the application UI should fulfill certain requirements.

## Tests

The project inhabits both **functional** and **visual** tests, under `cypress/integration` folder.

### functional

This folder inhabits functional UI tests, to demonstrate how certain aspects of an app structure can be verified. However, as this might grow cumbersome to maintain in the long run and with larger projects, verifying layout changes and breakages might be more useful to do with visual validation.

More useful is to provide functional tests for verifying the UI workflow.

### visual

This folder inhabits visual validation tests based on image snapshots difference comparison. It leverages the `cypress-plugin-snapshots` plugin to store snapshots inside the project and verifies changes against them.

### visual-percy

This folder inhabits visual tests that integrate with Percy.

## Usage

**Note on running tests for Percy**

As the Percy integrates with an existing project in the Percy platform, you have to provide a `PERCY_TOKEN` environment variable in order to store the snapshots. More detailed information can be found [here](https://docs.percy.io/docs/environment-variables#required).

### Development mode

1. On one terminal, start the local dev server for the `demo-app` by running `npm run demo-app`
2. On second terminal, start the Cypress server by running `npm run cypress:open`
3. Both servers use hot-reloading, go on and start hacking!

### Development mode using Percy

1. On one terminal, start the local dev server for the `demo-app` by running `npm run demo-app`

2. On second terminal, set the `PERCY_TOKEN` environment variable with the token value for your Percy project.

3. On the same terminal, start the Cypress server bu running `npm run cypress:percy:open`

When you exit the development mode, the generated snapshots will be posted to Percy.

### Single run in terminal

1. On one terminal, start the local dev server for the `demo-app` by running `npm run demo-app`

2. On second terminal, start the Cypress server by running `npm run cypress`

### Single run in terminal using Percy

1. On one terminal, start the local dev server for the `demo-app` by running `npm run demo-app`

2. On second terminal, set the `PERCY_TOKEN` environment variable with the token value for your Percy project.

3. On second terminal, start the Cypress server by running `npm run cypress:percy`
