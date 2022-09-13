import Primitive, { PrimitiveProps } from './primitive';

interface IconProps {
    x?: number;
    y?: number;
    isBlack?: boolean;
    source: [any, number, number, number]
}

class Icon extends Primitive {

    constructor(props: IconProps & PrimitiveProps) {
        super(props);
        this.#x = props.x || 0;
        this.#y = props.y || 0;
        this.#source = props.source;
        this.#fill = 1;
    }

    #x: number;
    get x() {
        return this.#x;
    }
    set x(value) {
        this.#x = value;
        this.render();
    }

    #y: number;
    get y() {
        return this.#y;
    }
    set y(value) {
        this.#y = value;
        this.render();
    }

    #source: [any, number, number, number];
    get source() {
        return this.#source;
    }
    set source(value) {
        this.#source = value;
        this.render();
    }

    #fill: 0 | 1;
    get fill() {
        return this.#fill;
    }
    set fill(value) {
        this.#fill = value;
        this.render();
    }

    render() {
        this.drawSprite(
            this.#source[0],
            this.#x,
            this.#y,
            this.#source[1] * this.#source[2],
            this.#source[1] * this.#source[3],
            this.$fill
        );
    }

}

export default Icon;
