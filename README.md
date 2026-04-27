# IP Address Viewer - Chrome Extension

Extensión de Chrome que muestra tu IP local y pública con un solo clic.

## Características

- 📍 **IP Local**: Obtiene tu dirección IP privada de la red
- 🌐 **IP Pública**: Obtiene tu dirección IP pública en Internet
- 🔄 **Actualizar**: Botón para refrescar los datos en cualquier momento
- 💨 **Ligero y rápido**: Sin dependencias externas

## Instalación

1. Clona este repositorio o descarga los archivos
2. Abre Chrome y ve a `chrome://extensions/`
3. Activa **"Modo de desarrollador"** (esquina superior derecha)
4. Haz clic en **"Cargar extensión sin empaquetar"**
5. Selecciona la carpeta del proyecto
6. ¡Listo! La extensión aparecerá en tu barra de herramientas

## Uso

Haz clic en el icono de la extensión en la barra de herramientas de Chrome y verás:
- Tu IP local (dirección privada de tu red)
- Tu IP pública (dirección que ve Internet)

## Archivos

- `manifest.json` - Configuración de la extensión
- `popup.html` - Interfaz visual
- `popup.js` - Lógica para obtener las IPs

## Tecnología

- WebRTC para obtener IP local
- API ipify.org para obtener IP pública

## Licencia

MIT
