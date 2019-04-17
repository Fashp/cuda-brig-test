const { events, Job } = require("brigadier");
events.on("simpleevent", () => {
  var job = new Job("hello-world", "alpine:3.8");
  job.tasks = [
    "echo Hello",
    "echo World"
  ];

  job.run();
});
