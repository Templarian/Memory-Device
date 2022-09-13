import Analog from "embedded:io/analog";
import Digital from "embedded:io/digital";
import DigitalBank from "embedded:io/digitalbank";
import I2C from "embedded:io/i2c";
import PulseCount from "embedded:io/pulsecount";
import PWM from "embedded:io/pwm";
import Serial from "embedded:io/serial";
import SMBus from "embedded:io/smbus";
import SPI from "embedded:io/spi";
import Button from "io/button";

export interface Device {
    I2C: any,
    Serial: any,
    SPI: any,
    Analog: any,
    io: {
        Analog: typeof Analog,
        Digital: typeof Digital,
        DigitalBank: typeof DigitalBank,
        I2C: typeof I2C,
        PulseCount: typeof PulseCount,
        PWM: typeof PWM,
        Serial: typeof Serial,
        SMBus: typeof SMBus,
        SPI: typeof SPI
    },
    pin: { [key: string]: number }
}

const device: Device = {
    I2C: {
        default: {
            io: I2C,
            data: 21,
            clock: 22
        }
    },
    Serial: {
        default: {
            io: Serial,
            port: 1,
            receive: 3,
            transmit: 1
        }
    },
    SPI: {
        default: {
            io: SPI,
            clock: 14,
            in: 12,
            out: 13,
            port: 1
        }
    },
    Analog: {
        default: {
            io: Analog,
            pin: 35
        }
    },
    io: { Analog, Digital, DigitalBank, I2C, PulseCount, PWM, Serial, SMBus, SPI },
    pin: {
        onboardButton: 0,
        onboardLed: 5,
        cs: 15,
        actionButton: 42,
        cancelButton: 42,
    }
};

device.peripheral = {
    button: {
        Default: class {
            constructor(options) {
                return new Button({
                    ...options,
                    io: device.io.Digital,
                    pin: device.pin.onboardButton,
                    mode: device.io.Digital.InputPullUp,
                    invert: true
                });
            }
        },
        Action: class {
            constructor(options) {
                return new Button({
                    ...options,
                    io: device.io.Digital,
                    pin: device.pin.actionButton,
                    mode: device.io.Digital.InputPullUp,
                    invert: true
                });
            }
        },
        Cancel: class {
            constructor(options) {
                return new Button({
                    ...options,
                    io: device.io.Digital,
                    pin: device.pin.cancelButton,
                    mode: device.io.Digital.InputPullUp,
                    invert: true
                });
            }
        }
    }
};

export default device;
