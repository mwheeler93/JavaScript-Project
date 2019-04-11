var DynamicButton = document.createElement("button");
DynamicButton.className = "DynamicButton";
DynamicButton.onclick = function() {
  DynamicButton.className[0] += 10%;
};
document.body.appendChild(DynamicButton);
