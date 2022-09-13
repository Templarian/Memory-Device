import { Device } from "device";
import Primitive, { PrimitiveProps } from "ui:primitive";

interface ApplicationProps {

}

class Application extends Primitive {

    constructor(props: ApplicationProps & PrimitiveProps) {
        super(props);
    }

    open(app) {

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
