function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(params) {
  var start = new Date().getTime();
  await sleep(parseInt(params.sleep));
  var end = new Date().getTime();
  var dur = end - start;
  return {slept: dur}; 
}

// main().then(dur => console.log(dur));

