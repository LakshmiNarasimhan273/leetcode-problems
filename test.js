// dns  trafficTest  db  atlas  cluster
function main_server() {
  console.log("SERVER CHECKING STARTS");

  (() => {
    setTimeout(() => {
      console.log("DNS Checking...");
      console.log("DNS Checking Successfull and testing traffic...");
    }, 2000);
  })();

  (() => {
    setTimeout(() => {
      console.log("Traffic Testing...");
      console.log("Traffic Testing Successfull and DB Analysis...");
    }, 5000);
  })();
  (() => {
    setTimeout(() => {
      console.log("Atlas Checking...");
      console.log("Atlas Checking Successfull and Cluster Checking...");
    }, 7000);
  })();
  (() => {
    setTimeout(() => {
      console.log("Cluster Checking...");
      console.log("Cluster Checking Successfull");
    }, 9000);
  })();
  (() => {
    setTimeout(() => {
      console.log("**SERVER RUNNING AND READY TO CONNECT**");
    }, 12000);
  })();
}

main_server();
