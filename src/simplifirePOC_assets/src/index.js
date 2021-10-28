import { simplifirePOC } from "../../declarations/simplifirePOC";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with simplifirePOC actor, calling the greet method
  const greeting = await simplifirePOC.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
