/**
 * Helper qui permet de gérer les className d'un composant
 */
export class ClassList {
    classes;

    constructor(classes = []) {
        this.classes = typeof classes === 'string'
            ? [classes]
            : classes;
    }

    add(className) {
        this.classes.push(className)
    }

    toString() {
        return this.classes.join(' ')
    }
}