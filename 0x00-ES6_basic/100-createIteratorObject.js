export default function createIteratorObject(report) {
    let departments = Object.values(report.allEmployees);
    let currentDeptIndex = 0;
    let currentEmployeeIndex = 0;

    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (currentDeptIndex >= departments.length) {
                return { done: true };
            }

            const currentDepartment = departments[currentDeptIndex];
            if (currentEmployeeIndex >= currentDepartment.length) {
                currentDeptIndex++;
                currentEmployeeIndex = 0;
                return this.next();
            }

            const result = {
                value: currentDepartment[currentEmployeeIndex],
                done: false
            };
            currentEmployeeIndex++;
            return result;
        }
    };
}
