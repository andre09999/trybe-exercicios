const acorda = () => 'acordando'
const lanchar = () => ' tomar cafe'
const dornir = () => 'dormir cambada'
const doingThings = (callback) => {
    const resul = callback();
    console.log(resul)
}
    doingThings(acorda);