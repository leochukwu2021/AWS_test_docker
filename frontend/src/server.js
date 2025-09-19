export const dev_server = "http://localhost:8085/api";
export const prod_server = "http://13.51.163.135/api";

const envDevLocal = true;
const prodBuild = false;

export let url;

if (!envDevLocal && prodBuild) {
  url = prod_server;
} else if (envDevLocal && !prodBuild) {
  url = dev_server;
} else {
  throw new Error("Wrong settings.");
}
