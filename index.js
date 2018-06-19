var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element){
  kittens.push(element);
  return kittens
}
function destructivelyPrependKitten(element){
  kittens.pop(element);
  return kittens
}
