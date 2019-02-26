function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(params) {
  var start = new Date().getTime();
  params.activationId = process.env.__OW_ACTIVATION_ID;
  await sleep(parseInt(params.sleep));
  var end = new Date().getTime();
  params.duration = end - start;
  return params; 
}

// main().then(dur => console.log(dur));

