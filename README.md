# Challenge La Nación

Aplicación que consume datos de un endpoint y renderiza una vista con la información obtenida.

El enunciado se encuentra en formato PDF en el archivo **`ChallengeLN.pdf`**.

## 📂 Estructura del Proyecto

### 📁 public
Contiene los **assets estáticos** del proyecto, como fuentes, imágenes y otros recursos que no cambian dinámicamente.

### 📁 src
Carpeta principal que contiene el código fuente de la aplicación.

- **📁 mocks**: Datos falsos utilizados en pruebas unitarias.  
- **📁 app**: Código base de la aplicación y su estructura principal.  
- **📁 components**: Componentes reutilizables de React.  
- **📁 config**: Configuración del proyecto, incluyendo variables de entorno y validaciones.  
- **📁 context**: Implementación de React Context para el manejo del estado global.  
- **📁 lib**: Utilidades compartidas en toda la aplicación.  
- **📁 types**: Definiciones de interfaces TypeScript reutilizables en el proyecto.  
- **📁 __tests__**: Pruebas unitarias, distribuidas dentro de cada sección del código.

## 🧪 Pruebas Unitarias
El proyecto cuenta con pruebas unitarias ubicadas en el directorio **`__tests__`**, dentro de cada sección.

## 🔑 Puntos Clave
- Los datos del endpoint se obtienen en el servidor, invocando la operación **`getArticles()`** del archivo **`fetch-data-API.ts`**.  
- Estos datos se cargan en el componente principal **`Page`**, el cual es renderizado en el servidor.  
- El componente **`Page`** contiene todo el contenido de la vista y utiliza **React Context** para proveer los datos necesarios a sus componentes hijos.  
- El componente **`ArticleGrid`** contiene la grilla de artículos, mapeando sobre el arreglo de artículos y renderizando un **`ArticleCard`** para cada uno cuyo subtipo sea `7`.  
- Por defecto, se muestran **9 artículos**; al presionar el botón **"Mostrar más"**, se cargan **9 más** hasta que se muestran todos los artículos y el botón desaparece.  
- Las **tags** se calculan en la función **`summarizeTags()`** del archivo **`summarize-tags.ts`** y se muestran en el componente **`TagsSection.tsx`**.

## 📦 Instalación y Uso

Para instalar las dependencias del proyecto, ejecuta:
```sh
npm install
```

Para correr las pruebas unitarias, ejecuta:
```sh
npm test
```

Para correr el proyecto en modo de desarrollo, ejecuta:
```sh
npm run dev
```

Para generar la versión de producción, ejecuta:
```sh
npm run build
npm run start
```
## 🚀 Tecnologías Utilizadas

El proyecto está construido con las siguientes tecnologías:

### 📌 Frontend
- **[React](https://react.dev/)** – Biblioteca para construir interfaces de usuario.  
- **[Next.js](https://nextjs.org/)** – Framework de React para SSR y generación estática.  
- **[TypeScript](https://www.typescriptlang.org/)** – Superset de JavaScript con tipado estático.  
- **[React Context](https://react.dev/reference/react/useContext)** – Mecanismo para la gestión de estado global.  


### 🧪 Pruebas
- **[Jest](https://jestjs.io/)** – Framework para ejecutar pruebas unitarias.  
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** – Utilidades para probar componentes React.  

### ⚙️ Configuración y Herramientas
- **[ESLint](https://eslint.org/)** – Linter para mantener código limpio y consistente.  
- **[Prettier](https://prettier.io/)** – Formateador de código automático. 
- **[Dotenv](https://www.npmjs.com/package/dotenv)** – Manejo de variables de entorno.  

---


Realizado en Marzo de 2025 a pedido de [La Nación](https://www.lanacion.com.ar/) por [Lautaro Jorge Garcia](https://www.linkedin.com/in/lautaro-jorge-garcia/)
