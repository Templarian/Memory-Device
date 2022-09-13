# Memory Device

An ESP32 low powered monochrome handheld device with traditional d-pad, A, B, and left and right bumpers.

> Skip down to the Development section for wiring up a device and deployment.

## User Interface

UI specifically built for the small 2.7" screen monochrome panel with no touch input.

| Class  | Module | Extends | Description |
| ------ | ------ | ------- | ----------- |
| `Primitive` | `ui:primitive` | - | All ui nodes must extend this. |
| `Icon` | `ui:icon` | `Primitive` | Renders an icon. |
| `{ IconAccount, ... }` | `ui:icon` | - | Pass to icon.source. |
| `Image` | `ui:image` | `Primitive` | Renders a 1 bit bmp resource. |
| `Rectangle` | `ui:rectangle` | `Primitive` | Rectangle shape. |
| `Text` | `ui:text` | `Primitive` | Renders static text. |
| `Button` | `ui:button` | `Primitive` | Focusable button. |
| `List` | `ui:list` | `Primitive` | Focusable list of items with selection. |
| `Input` | `ui:input` | `Primitive` | Focusable single line input. Launches keyboard. |
| `Application` | `ui:application` | `Primitive` | Root application node. |
| `Splash` | `ui:splash` | `Application` | Root splash page. |
| `Keyboard` | `ui:keyboard` | `Application` | Keyboard launch. |

## Development

Application Hierarchy

```
Game Screen
- Menu Button
  - WiFi
  - Pixel Editor
```

### Windows

Use "ESP-IDF 4.4 CMD" to run the below commands.

```
# Run Once (With Quotes!)
"C:\Program Files\Microsoft Visual Studio\2022\Community\VC\Auxiliary\Build\vcvars32.bat"

# Run to deploy
mcconfig -d -m -p esp32/esp32_thing

or 

mcconfig -d -m -p esp32/esp32_thing_plus
```

Something bad happens erase things.

```
esptool.py --port COM3 erase_flash
```

On a ESP32 the HSPI = 2 or "HSPI_HOST"


## Font Files