export default function orderByProps(object, propertiesSort) {
    let result = [];
    let tmpResult = [];
    propertiesSort.forEach(property => {
        if (property in object) {
            result.push({key: property, value: object[property]})

        }
    });
    for (const prop in object) {
        let property = {key: prop, value: object[prop]};
        if (!propertiesSort.find((p) => p === prop)) {
            tmpResult.push(property)
        } 
    }
    const sortTmp = tmpResult.slice().sort((a, b) => a.key.localeCompare(b.key));
    result.push(...sortTmp);

    return result
}


const obj = { attack: 80, defence: 40, health: 10, level: 2, name: 'мечник'};


console.log(orderByProps(obj, ["name", "level"]))