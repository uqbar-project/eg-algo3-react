
# Proyecto de ejemplo para Algo3

<img src="./images/React-logo.png" alt="logo react" height="auto" width="190px">

## Pasos previos

Si ya estuviste trabajando con otra tecnología estos pasos probablemente no son necesarios, pero conviene verificar que ya estén instalados.

- Si estás en entorno Windows te recomendamos instalarte [Git Bash](https://gitforwindows.org/)
- Seguimos con [NodeJS](https://nodejs.org/en/), la versión **24**.
- Luego [PNPM (Node Package Manager)](https://pnpm.io/es/), con el que vamos a hacer los builds de nuestras aplicaciones. Ojo, **no es npm solamente, tiene que ser pnpm**
- El editor de texto que vamos a soportar en la cursada es [Visual Studio Code](https://code.visualstudio.com/) (hay una versión portable si estás en una máquina sin privilegios de administrador).

## Específicos de React

### Plugins Visual Studio Code

Dentro de Visual Studio Code, te recomendamos que crees un perfil vacío y lo asocies a tus nuevos proyectos React (podés ver [cómo se trabaja con perfiles en VSCode en este video](https://www.youtube.com/watch?v=_2F2Zt-_tUA), la recomendación es partir con un profile totalmente vacío. También te dejamos [este tutorial muy piola - en inglés](https://www.youtube.com/watch?v=QjvvqR9KyVo) y [la documentación oficial](https://code.visualstudio.com/docs/editor/profiles)). 

La extensiones que te recomendamos instalar a 2026 son:

- **Biome (`biomejs.biome`):** Esencial para el linting y formateo integrado.
- **Error Lens (`usernamehw.errorlens`):** Resalta errores y advertencias directamente en la línea de código.
- **Pretty TypeScript Errors (`yoavbls.pretty-ts-errors`):** Hace que los errores de TypeScript sean más legibles y fáciles de entender.
- **Vitest (`vitest.explorer`):** Permite correr y debuguear tests desde el IDE.
- **Path Intellisense (`christian-kohler.path-intellisense`):** Autocompletado de rutas de archivos.
- y por supuesto **Git Lens - Git supercharged (`eamodio.gitlens`)** para manejarte con git

## Proyecto base de React

Este proyecto te va a permitir hacer el trabajo práctico de React. Solo hay que ejecutar algunos pasos para configurarlo según tu preferencia.

### Versión de node

En el archivo `.nvmrc` está la versión de node con la que deberías trabajar. En una terminal Git Bash o similar ejecutá

```bash
nvm use
```

En caso de que te aparezca un cartel como el siguiente (la versión puede diferir)

```bash
Found '.../eg-algo3-react/.nvmrc' with version <lts/krypton>
N/A: version "lts/krypton -> N/A" is not yet installed.

You need to run "nvm install lts/krypton" to install it before using it.
```

Tenés que ejecutar `nvm install`.


### Inicializar git

En la terminal Git Bash o similar tenés que hacer

```bash
rm -rf .git
git init
# reapuntar al repositorio remoto
git remote add origin url-del-repo-remoto
```

### Renombrar el nombre del proyecto

Abrí en un editor de texto el archivo `package.json` y cambiale el nombre al proyecto:

```json
{
  "name": "eg-algo3-react",
```

### Descargá las dependencias

En la carpeta raíz ejecutá

```bash
pnpm install
```

### Otros comandos útiles

```bash
pnpm dev                 # para levantar el server del frontend
pnpm test --run          # para ejecutar los tests
pnpm add dependencia     # para agregar una dependencia
pnpm add -D dependencia  # para agregar una dependencia de desarrollo
```

### Cómo configurar los badges en tu README

- Para agregar el badge del build de Github Actions, seguí [estas instrucciones](https://docs.github.com/es/actions/managing-workflow-runs/adding-a-workflow-status-badge)

- Para agregar el badge del porcentaje de cobertura, tenés que agregar la imagen que genera el mismo build de Github Actions (tal cual está escrito):

```md
![coverage](./badges/coverage/coverage.svg)
```
