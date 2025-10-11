
# Proyecto de ejemplo para Algo3

![React Logo](./images/React-logo.png)

## Pasos previos

Si ya estuviste trabajando con otra tecnología estos pasos probablemente no son necesarios, pero conviene verificar que ya estén instalados.

- Si estás en entorno Windows te recomendamos instalarte [Git Bash](https://gitforwindows.org/)
- Seguimos con [NodeJS](https://nodejs.org/en/), preferentemente la última versión estable (tiene que ser 22.x).
- Luego [NPM (Node Package Manager)](https://www.npmjs.com/), con el que vamos a hacer los builds de nuestras aplicaciones.
- El editor de texto que vamos a soportar en la cursada es [Visual Studio Code](https://code.visualstudio.com/) (hay una versión portable si estás en una máquina sin privilegios de administrador).

## Específicos de React

### Plugins Visual Studio Code

Dentro de Visual Studio Code, te recomendamos que crees un perfil vacío y lo asocies a tus nuevos proyectos React (podés ver [cómo se trabaja con perfiles en VSCode en este video](https://www.youtube.com/watch?v=_2F2Zt-_tUA), la recomendación es partir con un profile totalmente vacío. También te dejamos [este tutorial muy piola - en inglés](https://www.youtube.com/watch?v=QjvvqR9KyVo) y [la documentación oficial](https://code.visualstudio.com/docs/editor/profiles)). 

La extensiones que te recomendamos instalar a 2025 son:

- **ESLint - Microsoft**: integra las reglas definidas en el linter con el IDE
- **npm intellisense - de Christian Kohler**: te permite autocompletar dependencias buscándolas en npm
- **Vitest - Vitest**: para ejecutar los tests de frontend desde el VSC
- y por supuesto **Git Lens - Git supercharged** para manejarte con git

## Crear un proyecto React de cero

Para crear un proyecto React desde una terminal bash/zsh/Git Bash de Windows escribimos:

```bash
npm create vite@latest nombre-del-proyecto
```

Si te aparece un mensaje pidiendo instalar una dependencia vite aceptá con Y:

```bash
Need to install the following packages:
create-vite@8.0.2
Ok to proceed? (y) 
```

Y luego

- `✔ Select a framework: › React`: seleccionar React como framework de UI
- `✔ Select a variant: › Typescript + SWC`: elegir la variante Typescript con SWC (herramienta de reemplazo de Babel)
- `✔ Use rolldown-vite (Experimental)?:`, le decimos que no
- `✔ Install with npm and start now?`, le decimos que no

También podés usar el template directo React + Typescript + SWC (eso evita que tengas que seleccionar el tipo de proyecto):

```bash
npm create vite@latest nombre-de-proyecto -- --template react-swc-ts
```

Por defecto la aplicación cliente levantará en el puerto 5173. Como suele quedarse levantada aun cuando canceles la línea de comando y el navegador, te dejamos este link que te dice [cómo bajar el proceso del sistema operativo](https://stackoverflow.com/questions/39322089/node-js-port-3000-already-in-use-but-it-actually-isnt) para correr otro ejemplo.

# Configuraciones adicionales para Algoritmos III

## Dependencias

En este proyecto tenés un [package.json](./package.json) con las dependencias que te recomendamos usar. Reemplazá las dependencias del `package.json` de tu proyecto con estas versiones estrictas:

```json
  "dependencies": {
    "full-icu": "1.5.0",
    "react": "19.2.0",
    "react-dom": "19.2.0"
  },
  "devDependencies": {
    "@testing-library/dom": "10.4.1",
    "@testing-library/jest-dom": "6.9.1",
    "@testing-library/react": "16.3.0",
    "@testing-library/user-event": "14.6.1",
    "@types/react": "19.2.0",
    "@types/react-dom": "19.2.0",
    "@typescript-eslint/eslint-plugin": "8.45.0",
    "@typescript-eslint/parser": "8.45.0",
    "@vitejs/plugin-react-swc": "4.1.0",
    "@vitest/coverage-v8": "3.2.4",
    "eslint": "9.37.0",
    "eslint-plugin-react": "7.37.5",
    "eslint-plugin-react-hooks": "6.1.1",
    "eslint-plugin-react-refresh": "0.4.23",
    "jsdom": "27.0.0",
    "typescript": "5.9.3",
    "vite": "7.1.9",
    "vitest": "3.2.4"
  }
```

Esto evita que subamos de versión minor, debido a los últimos problemas de seguridad de npm es una medida preventiva.

## Archivo .nvmrc

Copiate el archivo [`.nvmrc`](./.nvmrc) de este proyecto, que indica cuál es la versión de Node con la que vamos a trabajar.

Cuando descargues tu proyecto en tu local lo primero que hay que correr es

```bash
nvm use
```

En caso de que te aparezca un cartel como el siguiente (la versión puede diferir)

```bash
Found '/Users/fernando/workspace/algo3/react/eg-algo3-react/.nvmrc' with version <lts/jod>
N/A: version "lts/jod -> N/A" is not yet installed.

You need to run "nvm install lts/jod" to install it before using it.
```

Tenés que ejecutar `nvm install`.

## Archivos útiles

Copiate los siguientes archivos de este proyecto al raíz del tuyo:

- [`.markdownlint.json`](./.markdownlint.json): la configuración de Linter para archivos markdown
- [`.prettierrc`](./.prettierrc): la configuración de Prettier para eliminar puntos y coma, definir tab de 2 espacios, utilizar single quote, etc. Es importante que tod@s tengan esta configuración para que no haya un montón de conflictos en git a la hora de pushear.
- [`eslint.config.js`](./eslint.config.js): la configuración de Linter para los archivos Typescript/Javascript/TSX/JSX que vamos a usar. A partir de 2025 estamos usando una **flat config**.
- [`.gitignore`](./.gitignore): los archivos que hay que ignorar en .git (agregamos algunas líneas en base a las extensiones de VSCode)
- [`vite.config.ts`](./vite.config.ts): la configuración que necesitamos para ejecutar los tests y recolectar el % de cobertura

## Configuración del proyecto

Al archivo `package.json` le modificamos el script lint y le agregamos test y coverage (borrale los comentarios porque no están permitidos en `json`):

```js
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "lint:fix": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0 --fix",
    "preview": "vite preview",
    "test": "vitest",
    "coverage": "vitest run --coverage"
```

## Otros archivos importantes

- [settings de VSCode](./.vscode/settings.json): El archivo de configuración de VSCode, para que detecte y arregle los errores del linter y respete el indentado que definió Prettier. Pegalo en tu proyecto en la carpeta `.vscode` con el nombre `settings.json`.
- [build para el CI](./build_react.yml) que tenés que guardar en `.github/workflows/build.yml`

# Cómo configurar los badges en tu README

- Para agregar el badge del build de Github Actions, seguí [estas instrucciones](https://docs.github.com/es/actions/managing-workflow-runs/adding-a-workflow-status-badge)

- Para agregar el badge del porcentaje de cobertura, tenés que agregar la imagen que genera el mismo build de Github Actions (tal cual está escrito):

```md
![coverage](./badges/coverage/coverage.svg)
```
