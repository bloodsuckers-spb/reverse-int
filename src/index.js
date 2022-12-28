module.exports = reverse = (x) =>
    `${(x ^ (x >> 31)) - (x >> 31)}`
    .replace(/\d/g, (_, i, str) => str[str.length - 1 - i]) >> 0;

    /* ещё один из вариантов решения
    const reverse = (x) => 
        `${x}`
            .replace("-", "")
            .replace(/\d/g, (_, i, str) => str[str.length - 1 - i]) >> 0; 
    */
