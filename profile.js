var DynamicButton = document.createElement("button");
DynamicButton.className = "DynamicButton";
DynamicButton.innerHTML = "Click Me!"
var clicks = 0;
DynamicButton.onclick = function() {
  clicks++;
  DynamicButton.backgroundColor = `rgb(${clicks}%,${clicks}%,${clicks}%)`;
};
document.body.appendChild(DynamicButton);
var c = 0
var TestButton = document.createElement("button");
TestButton.innerHTML = "Test"
TestButton.onclick = function() {
  c += 10;
  TestButton.backgroundColor = `rgb(${c}%), (${c}%), (${c}%)`
}
document.body.appendChild(TestButton);
