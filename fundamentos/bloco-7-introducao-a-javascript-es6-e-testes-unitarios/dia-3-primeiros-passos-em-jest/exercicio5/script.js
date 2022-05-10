const techList = (array, name) => {
    if (array.length === 0) {
        return 'Vazio!'
    }
    const sortear = array.sort();
    const tech = [];
    for (i in sortear) {
        tech.push({
            tech: sortear[i],
            name
        })
    }
    return tech
}


module.exports = techList;