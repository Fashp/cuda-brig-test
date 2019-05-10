const { events, Job } = require("brigadier");
events.on("simpleevent", (e, p) => {
  var job = new Job("transfer-engine", "packages.bco.cudaops.com/ccb-docker-local/transfer_engine:latest");
  env_vars = JSON.parse(e.payload)

  job.env = {
  	"CUDA_MANIFEST_STORE_HOSTNAME": env_vars.manifest_hostname,
	"CUDA_DATASOURCE_HOSTNAME": env_vars.datasource_hostname
  }

  job.run();
});
