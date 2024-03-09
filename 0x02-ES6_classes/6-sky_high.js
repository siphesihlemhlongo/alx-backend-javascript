class Building {
    constructor(sqft) {
        this._sqft = sqft;

        if (typeof this._sqft !== 'number') {
            throw new TypeError('Sqft must be a number');
        }
    }

    // Getter for sqft
    get sqft() {
        return this._sqft;
    }

    // Abstract method for evacuationWarningMessage
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}

export default Building;
