class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;

        if (typeof this._name !== 'string') {
            throw new TypeError('Name must be a string');
        }

        if (typeof this._code !== 'string') {
            throw new TypeError('Code must be a string');
        }
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        if (typeof newName !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = newName;
    }

    // Getter for code
    get code() {
        return this._code;
    }

    // Setter for code
    set code(newCode) {
        if (typeof newCode !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = newCode;
    }

    // Default string description
    toString() {
        return this._code;
    }
}

export default Airport;
