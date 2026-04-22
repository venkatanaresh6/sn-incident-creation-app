function createIncident() {
  const shortDesc = document.getElementById("shortDesc").value;
  const desc = document.getElementById("desc").value;

  fetch("/create-incident", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      short_description: shortDesc,
      description: desc
    })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerText =
      "Incident Created: " + data.result.number;
  })
  .catch(err => {
    document.getElementById("result").innerText =
      "Error creating incident";
    console.error(err);
  });
}