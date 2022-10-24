import "reflect-metadata"

export const minimumValue = (propName: string, min: number) => 
    (constructor: any, methodName: string, descriptor: PropertyDescriptor): any => {
        const originFunction = descriptor.value;
        descriptor.value = async function wrapper(...args) {
            let result = await originFunction.apply(this, args);
            return result.map(r => ({ ...r, [propName]: r[propName] < min ? min : r[propName]}));
        }
    }

export const addClass = (selector: string, ...classNames: string[]) =>
    (constructor: any, methodName: string, descriptor: PropertyDescriptor): any => {
        if (Reflect.getMetadata("design:returntype",
            constructor, methodName) === HTMLElement) {
                const originFunction = descriptor.value;
                descriptor.value = function wrapper(...args) {
                    let content: HTMLElement = originFunction.apply(this, args);
                    content.querySelectorAll(selector).forEach(elem =>
                        classNames.forEach(c => elem.classList.add(c)));
                    return content;
                }
        }
    }