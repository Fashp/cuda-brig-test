const { events, Job } = require("brigadier");
events.on("simpleevent", (e, p) => {
  var job = new Job("transfer-engine", "packages.bco.cudaops.com/ccb-docker-local/transfer_engine:latest");
  env_vars = JSON.parse(e.payload)

  job.env = {
  	"CUDA_MANIFEST_STORE_ADDRESS": env_vars.manifest_address,
	"CUDA_DATASOURCE_ADDRESS": env_vars.datasource_address,
	"CUDA_MANIFEST_ID": env_vars.manifest_id,
	"CUDA_PATH": env_vars.path
  }

  job.run();
});
