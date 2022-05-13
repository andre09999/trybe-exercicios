  
const completo =  (func) => {
    const email = func.toLowerCase().split(' ').join('_')
    return { func, email: `${email}@trybe.com`}
};

function newEmployees(callback) {
    const employees = {
        id1: callback('Pedro Guerra'),
        id2: callback('Luiza Drumond'),
        id3: callback('Carla Paiva'),
    }
    return employees;
}

    console.log(newEmployees(completo));