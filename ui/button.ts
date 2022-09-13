import Primitive, { PrimitiveProps } from 'ui:primitive';

interface ButtonProps {
    x?: number;
    y?: number;
    width?: number;
    isBlack?: boolean;
}

class Button extends Primitive {

    constructor(props: ButtonProps & PrimitiveProps) {
        super(props);
        this.#x = props.x;
        this.#y = props.y;
        this.#width = props.width;
        this.#isBlack = props.isBlack || 0;
    }

    #x;
    get x() {
        return this.#x;
    }
    set x(value) {
        this.#x = value;
        this.render();
    }

    #y;
    get y() {
        return this.#y;
    }
    set y(value) {
        this.#y = value;
        this.render();
    }

    #width;
    get width() {
        return this.#width;
    }
    set width(value) {
        this.#width = value;
        this.render();
    }

    #isBlack;
    get isBlack() {
        return this.#isBlack;
    }
    set isBlack(value) {
        this.#isBlack = value;
        this.render();
    }
    
    render() {
        this.fillRectangle(
            this.#isBlack ? this.BLACK : this.WHITE,
            this.#x,
            this.#y,
            this.#width,
            32
        );
    }

}

export default Button;
