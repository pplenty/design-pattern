/**
 * @author : yusik
 * @date : 29/11/2018
 */

class ChartFactory {

    constructor(...arg) {

        this.instances = [];
        arg.forEach(instance => this.instances.push(instance))
    }

    static register(clazzName, clazz) {
        if (!this._registeredTypes.has(clazzName)) {
            this._registeredTypes.set(clazzName, clazz);
        } else {

        }
    }
    static create(clazzName, ...options) {
        console.log(clazzName);
        console.log(options);

        if (!this._registeredTypes.has(clazzName)) {
            console.error("!!!");
            return null;
        }
        let clazz = this._registeredTypes.get(clazzName);
        let instance = new clazz(options);
        return instance;
    }

}
ChartFactory._registeredTypes = new Map();

module.exports = ChartFactory;