function run() {
  document.getElementById("output").contentDocument.body.innerHTML =
    document.getElementById("html-code").value +
    "<style>" +
    document.getElementById("css-code").value +
    "</style>";
  document
    .getElementById("output")
    .contentWindow.eval(document.getElementById("js-code").value);
}
