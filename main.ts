/*import Timer from "timer";
import Digital from "pins/digital";
import WiFi from "wifi";*/

import Application from "ui:application";
import Icon from "ui:icon";
import { IconAlert, IconFile } from "ui:icons";
import Button from "ui:button";

const app = new Application({
  id: 'main',
  state: {
    toggle: true
  },
  items: [
    new Icon({
      id: 'icon',
      x: 10,
      y: 10,
      source: IconAlert
    }),
    new Button({
      x: 100,
      y: 10,
      action: (app, state) => {
        state.toggle = !state.toggle;
        const icon = app.query('icon');
        icon.source = state ? IconAccount : IconFile;
      },
      cancel: (app) => {
        app.restart();
      }
    })
  ]
});
app.start({});
/*
// Let me know it's working
let count = 0;
Timer.repeat(() => {
    ++count;
    Digital.write(ONBOARD_LED_PIN, count & 1);
}, 500);

trace('App started successfully!');

let aps = [];

WiFi.mode = 1;

function scan() {
    WiFi.scan({}, ap => {
        if (ap) {
            if (!aps.find(value => ap.ssid == value)) {
                aps.push(ap.ssid);
                trace(`${ap.ssid}\n`);
            }
        } else {
            scan();
        }
    });
}

trace("Scan start\n");
scan();
*/