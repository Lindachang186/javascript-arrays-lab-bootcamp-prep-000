var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element){
  kittens.push(element);
  return kittens
}
function destructivelyPrependKitten(element){
  kittens.shift(element);
  return kittens
}
