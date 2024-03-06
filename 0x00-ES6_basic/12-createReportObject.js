export default function createReportObject(employeesList) {
    const allEmployees = {};

    employeesList.forEach(employee => {
        const { name, department } = employee;
        if (!allEmployees[department]) {
            allEmployees[department] = [];
        }
        allEmployees[department].push(name);
    });

    return {
        allEmployees,
        getNumberOfDepartments() {
            return Object.keys(allEmployees).length;
        }
    };
}
