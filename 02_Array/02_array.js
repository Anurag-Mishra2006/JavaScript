const marvel_heros = ["Thor","IronMan", "SpiderMan"]
const dc_heros =["SuperMan", "Flash", "Batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros) // It append the whole array of dc_heros in to the marvel_heros3

// let heros = marvel_heros.concat(dc_heros)
// console.log( heros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

