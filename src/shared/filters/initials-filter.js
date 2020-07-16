export default function(name) {
  return name.match(/\b(\w)/g).join("");
}
