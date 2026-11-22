
# Arquitectura del Sistema de Inventario Agrocomercial

## 1. Diagrama C4 - Nivel 1: Contexto

### Contexto del sistema

El sistema de inventario agrocomercial permitirá al administrador o empleado registrar productos, consultar las existencias y registrar ventas. El sistema calcula los totales de las ventas y actualiza automáticamente las cantidades disponibles en el inventario.

```mermaid
C4Context
    title Nivel 1 - Contexto del sistema agrocomercial

    Person(usuario, "Usuario", "Administrador o empleado del negocio.")

    System(sistema, "Sistema de Inventario Agrocomercial", "Permite gestionar productos, existencias y ventas.")

    System_Ext(baseDatos, "Supabase / PostgreSQL", "Almacena productos, precios, existencias y ventas.")

    Rel(usuario, sistema, "Utiliza")
    Rel(sistema, baseDatos, "Consulta y actualiza información")
```

## 2. Diagrama C4 - Nivel 2: Contenedores

El sistema se organiza en una interfaz web, un backend y una base de datos. Cada componente tiene responsabilidades específicas.

```mermaid
C4Container
    title Nivel 2 - Contenedores del sistema agrocomercial

    Person(usuario, "Usuario", "Administrador o empleado del negocio.")

    System_Boundary(sistema, "Sistema de Inventario Agrocomercial") {

        Container(frontend, "Interfaz web", "HTML, CSS y JavaScript", "Permite registrar productos, consultar existencias y registrar ventas.")

        Container(backend, "Backend", "Python", "Calcula los totales de ventas, valida las cantidades disponibles y actualiza el inventario.")

        ContainerDb(db, "Base de datos", "Supabase / PostgreSQL", "Almacena productos, precios, existencias y registros de ventas.")
    }

    Rel(usuario, frontend, "Utiliza")
    Rel(frontend, backend, "Envía solicitudes", "HTTP / JSON")
    Rel(backend, db, "Consulta y actualiza productos, existencias y ventas")
```

## 3. Justificación de decisiones arquitectónicas

### Decisión 1: Separación entre frontend y backend

Se decidió separar la interfaz web, desarrollada con HTML, CSS y JavaScript, del backend desarrollado en Python.

- **Mantenibilidad:** permite modificar la interfaz sin alterar las reglas de negocio.
- **Modificabilidad:** facilita agregar nuevas funcionalidades al sistema.
- **Testeabilidad:** permite probar la lógica de ventas independientemente de la interfaz.

Se prioriza la mantenibilidad sobre la simplicidad de tener todo el código en un solo lugar, porque el sistema puede crecer con nuevas funcionalidades.

### Decisión 2: Utilización de Supabase con PostgreSQL

Se decidió utilizar Supabase como servicio de base de datos PostgreSQL para almacenar los productos, sus precios, las existencias y las ventas.

- **Integridad:** permite mantener relaciones entre productos y ventas.
- **Confiabilidad:** permite almacenar y consultar información estructurada.
- **Consistencia:** es importante que las cantidades disponibles se actualicen correctamente después de cada venta.

Se prioriza la integridad de los datos sobre la utilización de un almacenamiento más sencillo, porque un error en las existencias puede afectar directamente las ventas del negocio.

## 4. Correcciones realizadas al borrador generado con IA

Se revisó el borrador inicial y se realizaron las siguientes correcciones:

1. Se sustituyeron tecnologías genéricas por las tecnologías reales del proyecto: HTML, CSS, JavaScript, Python y Supabase con PostgreSQL.
2. Se eliminaron contenedores y servicios que no forman parte del sistema agrocomercial.
3. Se identificaron correctamente las responsabilidades del frontend y del backend.
4. Se agregó el proceso de actualización automática de existencias después de registrar una venta.
5. Se ajustaron las relaciones entre los usuarios, la interfaz, el backend y la base de datos.

La revisión permitió obtener una arquitectura más cercana al funcionamiento real del sistema y evitar representar funcionalidades que todavía no están implementadas.

