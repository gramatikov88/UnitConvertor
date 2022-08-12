function copyText() {
  var copyText = document.getElementById("outputCm");

  copyText.select();
  copyText.setSelecteionRange(0, 999999999999);

  navigator.clipboard.writeText(copyText.value);
}

function alertCopy() {
  document.getElementById("copied").innerHTML = "Copied!";
}
