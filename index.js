var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(element){
  kittens.push(element);
  return kittens
}
function destructivelyPrependKitten(element){
  kittens.unshift(element);
  return kittens
}
function destructivelyRemoveLastKitten(element){
  kittens.pop(element);
}
