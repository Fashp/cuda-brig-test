const { events, Job } = require("brigadier");
events.on("simpleevent", () => {
  var job = new Job("hello-world", "packages.bco.cudaops.com/ccb-docker-local/transfer-engine:latest");

  job.run();
});
