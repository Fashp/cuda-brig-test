const { events, Job } = require("brigadier");
events.on("simpleevent", (e, p) => {
  var job = new Job("hello-world", "alpine:3.8"); // "packages.bco.cudaops.com/ccb-docker-local/transfer-engine:latest");
  f = JSON.parse(e.payload)
  job.tasks = [
    "echo Hello " + f.f,
    "echo World" + p.name
  ];

  job.run();
});
