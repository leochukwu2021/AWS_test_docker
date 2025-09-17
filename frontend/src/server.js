export const dev_server = "http://127.0.0.1:8000/api";
export const prod_server = "http://13.51.163.135/api";

const envDevLocal = false;
const prodBuild = true;

export let url;

if (!envDevLocal && prodBuild) {
  url = prod_server;
} else if (envDevLocal && !prodBuild) {
  url = dev_server;
} else {
  throw new Error("Wrong settings.");
}
