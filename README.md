# Proto

Shared protobuf definitions for Agora services.

## Use in a project

Go
```bash
go get -u  github.com/a-novel/proto
```

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

Install the project dependencies

```bash
make install
```

### Maintenance

Update dependencies for generated packages

```bash
make update
```

Make sure proto file are properly formatted

```bash
make format
```
