# Ejemplo práctico de WAI-ARIA

Este proyecto es un ejemplo práctico y sencillo desarrollado en React, diseñado para demostrar la implementación básica de los estándares de accesibilidad WAI-ARIA y WCAG. La aplicación se enfoca en elementos sencillos basados en los tres pilares fundamentales de ARIA Roles, Estados y Propiedades.

---

# 🖥️ Interfaz y Funcionamiento

La interfaz de la aplicación es minimalista y consta de un contenedor con un párrafo central y tres botones de control (Anterior, Aleatoria y Siguiente).

<img width="627" height="192" alt="image" src="https://github.com/user-attachments/assets/2df697f0-c938-4439-a804-0779d514e434" />

El flujo del sistema se basa en una lista de palabras relacionadas con la accesibilidad que cambian dinámicamente según el botón que se pulse. Siendo la implementación de WAI-ARIA en elemento de la interfaz para garantizar que los lectores de pantalla (como el Narrador de Windows) puedan transmitir de forma clara la información y el contexto de navegación al usuario.

<img width="632" height="306" alt="image" src="https://github.com/user-attachments/assets/348887ca-2f9b-405c-af12-93ef163f7f6d" />

## 1. Párrafo dinámico:

Utiliza role="status" y aria-live="polite" para notificar de manera sutil y automática al lector de pantalla cada vez que el texto cambia de palabra:

<img width="520" height="51" alt="image" src="https://github.com/user-attachments/assets/7d71ccdd-a512-486c-a01a-73c0a578e56c" />

## 2. Grupo de botones (Toolbar)

Los botones se encuentran agrupados dentro de un contenedor con role="toolbar", lo que indica a las tecnologías de asistencia que forman parte de un grupo.

<img width="520" height="50" alt="image" src="https://github.com/user-attachments/assets/c70a71cd-1cf8-4f37-89a0-a84b1cec7550" />

## 3.Botones de control

Cada botón incorpora el atributo aria-controls="palabra-actual". Esto le permite al lector de pantalla informarle al usuario exactamente sobre qué elemento el botón tiene efecto.

<img width="480" height="52" alt="image" src="https://github.com/user-attachments/assets/75be04d0-3844-4bd5-9ceb-2afbb9541d81" />
