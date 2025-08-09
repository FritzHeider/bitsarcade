# BitsArcade

This repository contains a Laravel-based project. The original codebase did not include any automated test scaffolding, which made it difficult to verify changes.

## Running tests

1. Install PHP dependencies (including development packages):
   ```bash
   composer install --ignore-platform-reqs
   ```
2. Run the test suite:
   ```bash
   composer test
   ```

Currently only a placeholder test exists. Front-end tests have not been set up yet.

For additional details about the project, see [DOCUMENTATION.md](DOCUMENTATION.md).

## Docker development

To run the application in a containerized environment:

```bash
docker-compose up --build
```

The application will be available at `http://localhost:8000` by default.

## Continuous integration

A GitHub Actions workflow is provided at `.github/workflows/ci.yml`.
It installs PHP dependencies and executes the test suite on every push and pull request.
