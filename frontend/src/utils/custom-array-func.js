/*eslint no-extend-native: ["error", { "exceptions": ["Array"] }]*/
Array.prototype.groupBy = function (key) {
    let result = this.reduce(function (r, a) {
        let value = key.split('.').reduce((value, entry) => value && value[entry], a)
        r[value] = r[value] || [];
        r[value].push(a);
        return r;
    }, []);

    return Object.values(result)
}