module.exports = reverse = (x) =>
    `${(x ^ (x >> 31)) - (x >> 31)}`
    .replace(/\d/g, (_, i, str) => str[str.length - 1 - i]) >> 0;

    /*
        Более эффективный алгоритм:

        const reverse = (num) => {
            let result = 0;
            num = (num ^ (num >> 31)) - (num >> 31);
            while (num) {
                result = result * 10 + (num % 10);
                num = (num / 10) | 0;
            }
            return result;
        };
    */

    /* 
        Ёщё один из вариантов решения c помощью регулярок:
    
        const reverse = (x) => 
        `${x}`
            .replace("-", "")
            .replace(/\d/g, (_, i, str) => str[str.length - 1 - i]) >> 0; 
    */
