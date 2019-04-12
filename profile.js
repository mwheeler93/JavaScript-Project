var DynamicButton = document.createElement("button");
DynamicButton.className = "DynamicButton";
DynamicButton.innerHTML = "Click Me!"
DynamicButton.onclick = function() {
  var clicks = 0;
  clicks++;
  DynamicButton.backgroundColor = `rgb(${clicks}%,${clicks}%,${clicks}%)`;
};
document.body.appendChild(DynamicButton);
