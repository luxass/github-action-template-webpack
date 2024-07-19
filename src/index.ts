import * as core from "@actions/core";

async function run(): Promise<void> {
  core.info("This is a template action");
  const nameToGreet = core.getInput("who-to-greet");
  core.info(`Hello, ${nameToGreet}!`);
}

run().catch((err) => {
  console.error(err);
  core.setFailed(err);
});
