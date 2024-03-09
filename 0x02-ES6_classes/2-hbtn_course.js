class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = Array.isArray(students) ? students : [];

        if (typeof this._name !== 'string') {
            throw new TypeError('Name must be a string');
        }

        if (typeof this._length !== 'number') {
            throw new TypeError('Length must be a number');
        }

        if (!Array.isArray(this._students)) {
            throw new TypeError('Students must be an array');
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

    // Getter for length
    get length() {
        return this._length;
    }

    // Setter for length
    set length(newLength) {
        if (typeof newLength !== 'number') {
            throw new TypeError('Length must be a number');
        }
        this._length = newLength;
    }

    // Getter for students
    get students() {
        return this._students;
    }

    // Setter for students
    set students(newStudents) {
        if (!Array.isArray(newStudents)) {
            throw new TypeError('Students must be an array');
        }
        this._students = newStudents;
    }
}

export default HolbertonCourse;

