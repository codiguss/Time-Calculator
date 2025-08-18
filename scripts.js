document.addEventListener('DOMContentLoaded', () => {
  const pixelSpaceInput = document.querySelector("input")
  const resultSpan = document.querySelector("span")

  function calculateTime() {
  const maxCapacity = parseInt(pixelSpaceInput.value)
  const timeInSeconds = maxCapacity * 30

  if (isNaN(maxCapacity) || maxCapacity <= 0) {
    resultSpan.textContent = "number invalid, please enter a valid number"
    return
  }

  const timeFormatted = formatTime(timeInSeconds);
  resultSpan.textContent = timeFormatted;

}

function formatTime(seconds) {
  const days = Math.floor(seconds / (24 * 3600))
  const hours = Math.floor((seconds % (24 *3600)) / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  let result = ""

  if (days > 0) {
    result += `${days}d `
  }

  if (hours > 0) {
    result += `${hours}h `
  }

  if (minutes > 0) {
    result += `${minutes}m `
  }

  if (secs > 0) {
    result += `${secs}s `
  }

  return result.trim() || "0s"
}


pixelSpaceInput.addEventListener("input", function() {
  if (this.value) {
    calculateTime()
  } else {
    resultSpan.textContent = ""
  }
})

})

