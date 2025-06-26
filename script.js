function volume_sphere() {
  const radiusInput = document.getElementById("radius");
  const volumeOutput = document.getElementById("volume");

  const radius = parseFloat(radiusInput.value);

  // Clear the volume field first
  volumeOutput.value = "";

  // If invalid input, exit early
  if (isNaN(radius) || radius < 0) {
    return false;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeOutput.value = volume.toFixed(4);

  return false;
}

window.onload = function () {
  const form = document.getElementById("MyForm");
  form.onsubmit = function (e) {
    e.preventDefault();
    volume_sphere();
  };
};
