# Proto

Shared protobuf definitions for Agora services.

## Use in a project

Get import instructions from [buf release](https://buf.build/a-novel/proto/sdks).

## Run the project locally

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [Go](https://go.dev/doc/install)
- Make
  - macOS:
    ```bash
    brew install make
    ```
  - Ubuntu:
    ```bash
    sudo apt-get install make
    ```
  - Windows: Install [chocolatey](https://chocolatey.org/install) (from a PowerShell with admin privileges), then run:
    ```bash
    choco install make
    ```

Install the project dependencies.

```bash
make install
```

## Work on the project

Make sure proto files are properly formatted.

```bash
make format
```

Ensure proto files are linted.

```bash
make lint
```

### Maintenance

Update dependencies for generated packages.

```bash
make update
```