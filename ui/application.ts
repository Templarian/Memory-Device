import { Device } from "device";
import Primitive, { PrimitiveProps } from "ui:primitive";

interface ApplicationProps {
    state: { [key: string]: number | string | boolean }
}

class Application extends Primitive {

    constructor(props: ApplicationProps & PrimitiveProps) {
        super(props);
    }

    open() {

    }

    start(device: Device) {
        this.items.forEach(ele => {
            ele.render();
        });
    }

    stop() {
        // Stop active application
    }

}

export default Application;
