# kaoto-next
The next version of the UI for the Kaoto project.

## Table of Contents
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
- [Development](#development)
  - [Web Application](#web-application)
    - [Run](#run)
    - [Build](#build)
  - [Public Components](#public-components)
- [Camel Catalog and Supporting Schemas](#camel-catalog-and-supporting-schemas)

## Requirements
- NodeJS (v18.x or higher) [+info](https://nodejs.org/en)
- Yarn (v3.x or higher) [+info](https://yarnpkg.com/getting-started/install)
- OpenJDK (v17 or higher) [+info](https://developers.redhat.com/products/openjdk/download)

_For more information on Vite, check [Vite's documentation](https://vitejs.dev/config/)._

## Getting Started
### Clone the Repository
First, clone the repository to your local machine.

```sh
git clone https://github.com/KaotoIO/kaoto-next
```
### Install Dependencies

Navigate to the cloned directory and install the necessary packages.

```sh
cd kaoto-next
yarn install
```
_Note: By default, `@kaoto-next/camel-catalog` will also be built using the `mvn` wrapper._

## Development
### Web Application
#### Run
To start the development server, execute the following command:
```sh
yarn workspace @kaoto-next/ui run start
```
The application will be accessible at `http://localhost:5173` by default.

#### Build
To build the web application, execute:
```sh
yarn workspace @kaoto-next/ui run build
```

### Public Components
To build the public components, execute:
```sh
yarn workspace @kaoto-next/ui run build:lib
```

## Camel Catalog and Supporting Schemas
To build the Camel Catalog and the supporting schemas, run:
```sh
yarn workspace @kaoto-next/camel-catalog run build
```
_Optional: You can update the Camel version in the `pom.xml` file and then run the build command again._
