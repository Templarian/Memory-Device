import Resource from "Resource";
import parseBMF from "commodetto/parseBMF";
import parseBMP from "commodetto/parseBMP";
import {
    BLACK,
    WHITE,
} from './constants';

let palatino36 = parseBMF(new Resource("palatino_36.fnt"));
palatino36.bitmap = parseBMP(new Resource("palatino_36.bmp"));

export interface PrimitiveProps {
    items?: any[];
    id?: string;
    action?(app?: any, state?: any): any;
    cancel?(app?: any, state?: any): any;
    up?(app?: any, state?: any): any;
    right?(app?: any, state?: any): any;
    down?(app?: any, state?: any): any;
    left?(app?: any, state?: any): any;
    bumperLeft?(app?: any, state?: any): any;
    bumperRight?(app?: any, state?: any): any;
}

class Primitive {

    constructor(props: PrimitiveProps) {
        this.#id = props.id;
        if (props.items)
            this.items = this.items;
        if (props.action)
            this.#action = props.action;
        if (props.cancel)
            this.#cancel = props.cancel;
    }

    #id;
    get id() {
        return this.#id;
    }

    #state = {
        actionPressed: false,
        cancelPressed: false,
        topPressed: false,
        rightPressed: false,
        downPressed: false,
        leftPressed: false,
        focused: false
    }

    #parent?: Primitive;
    get parent() {
        return this.#parent;
    }
    set parent(value) {
        this.#parent = value;
    }

    #items: Primitive[] = [];
    get items() {
        return this.#items;
    }
    set items(value) {
        this.#items = new Proxy<any>(value, {
            deleteProperty: () => true,
            set: (target, property, value) => {
                target[property] = value as string;
                if (property !== 'length')
                    target[property].parent = this;
                return true;
            }
        });
        this.#items.forEach((element) => {
            element.parent = this;
        });
    }

    hasFocus = false;
    WHITE = WHITE;
    BLACK = BLACK;

    #action;
    get action() {
        return this.#action;
    }
    set action(value) {
        this.#action = value;
    }

    #cancel;
    get cancel() {
        return this.#action;
    }
    set cancel(value) {
        this.#cancel = value;
    }

    up() {
        this.#focus(this.focusUp, 1);
    }

    right() {
        this.#focus(this.focusRight, 2);
    }

    down() {
        this.#focus(this.focusDown, 3);
    }

    left() {
        this.#focus(this.focusLeft, 4);
    }

    #focusUp?: string;
    get focusUp() {
        return this.#focusUp
            ? this.#focusUp as string
            : null;
    }
    set focusUp(value: string | null) {
        this.#focusUp = value
            ? value as string
            : undefined;
    }

    #focusLeft?: string;
    get focusLeft() {
        return this.#focusLeft
            ? this.#focusLeft as string
            : null;
    }
    set focusLeft(value: string | null) {
        this.#focusLeft = value
            ? value as string
            : undefined;
    }

    #focus(id: string, direction) {
        if (!id) {
            this.parent.focus(null, direction);
        }
        this.items.find(x => x.id === id).focus();
    }

    focus(id: string) {
        this.#focus(id);
    }

    query(id: string) {
        if (this.#id === id)
            return this;
        if (this.items) {
            this.items.forEach((element) => {
                const result = element.query(id);
                if (result !== null)
                    return result;
            });
        }
        this.parent.items.forEach((element) => {
            if (element === this)
                return;
            const result = element.query(id);
            if (result !== null)
                return result;
        });
        return null;
    }

    render() {

    }

    fillRectangle(fill, x, y, width, height) {
        poco.fillRectangle(
            fill === 0 ? WHITE : fill || BLACK,
            x,
            y,
            width,
            height
        );
    }

    drawSprite(source, x, y, sourceX, sourceY, sourceWidth, sourceHeight, foreground?, background?) {
        poco.drawMonochrome(
            source,
            foreground === 0 ? WHITE : foreground || BLACK,
            background === 0 ? WHITE : background || undefined,
            x,
            y,
            sourceX,
            sourceY,
            sourceWidth,
            sourceHeight
        );
    }

    drawImage(source, x, y, foreground, background) {
        poco.drawMonochrome(
            source,
            foreground === 0 ? WHITE : foreground || BLACK,
            background === 0 ? WHITE : background || undefined,
            x,
            y
        );
    }

    drawText() {
        poco.drawText.apply(this, arguments); // ("Hello.", palatino36, black, 4, 20);
    }

}

export default Primitive;
