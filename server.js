// // const http=require("http");

// // const server=http.createServer((req,res)=>{
// //     res.writeHead(200,{'Content-Type':'text/html'});
// //     res.end("<h1>Hello World</h1>");
// // });

// // server.listen(3000,()=>{
// //     console.log('Server is running on http://localhost:3000');
// // });



// // const http=require("http");
// // const calculate=require("./calculator")

// // const server=http.createServer((req,res)=>{
// //         res.writeHead(200,{'Content-Type':'text/html'});
// //         let t=calculate.add(2,3);
// //         res.end(<h1>Calculator Results ${t}</h1>)
// //      });
    
// // // console.log(calculate.add(2,3));
// // server.listen(3000,()=>{
// //          console.log('Server is running on http://localhost:3000');
// //     });



// // const http = require("http");
// // const calculate = require("./calculator");

// // const server = http.createServer((req, res) => {
// //     res.writeHead(200, { 'Content-Type': 'text/html' });

// //     // Example: Perform various calculations
// //     let addition = calculate.add(2, 3);
// //     let subtraction = calculate.sub(5, 2);
// //     let multiplication = calculate.mul(4, 3);
// //     let division = calculate.div(10, 2);

// //     res.end(`
// //         <h1>Calculator Results</h1>
// //         <p>Addition (2 + 3): ${addition}</p>
// //         <p>Subtraction (5 - 2): ${subtraction}</p>
// //         <p>Multiplication (4 * 3): ${multiplication}</p>
// //         <p>Division (10 / 2): ${division}</p>
// //     `);
// // });

// // server.listen(3000, () => {
// //     console.log('Server is running on http://localhost:3000');
// // });






// // const fs=require('fs');
// // fs.readFile('sample.txt',"utf8",(err,data)=>{
// //      if(err){
// //           console.log(err);
// //           return
// //      }
// //      console.log(data)
// // })



// // const fs=require('fs');
// // fs.writeFile("sample1.txt","Hello World !",(err)=>{
// //      if(err){
// //           console.error(err);
// //           return;
// //      }
// //      console.log("File Created");
// // })





// // const fs=require('fs');
// // const newPerson = {
// //      name: "kumar",
// //      age: 30,
// //      city: "New York",
// //      amount: 1500,
// //    };
   
// //    fs.readFile("sample.json", "utf8", (err, data) => {
// //      if (err) {
// //        console.error(err);
// //        return;
// //      }
// //      const json = JSON.parse(data);
// //      const newList = [...json, newPerson];
// //      fs.writeFile("sample.json", JSON.stringify(newList), (err) => {
// //        if (err) {
// //          console.error(err);
// //          return;
// //        }
// //      });
// //      console.log(json);
// //    });






// // const fs=require('fs');
// // const newPerson = {
// //      name: "kumar",
// //      age: 30,
// //      city: "New York",
// //      amount: 1500,
// //    };
   
// //    fs.readFile("sample.json", "utf8", (err, data) => {
// //      if (err) {
// //        console.error(err);
// //        return;
// //      }
// //      const json = JSON.parse(data);
// //      const newList = json.filter((data)=>data.name !=="kumar" );
// //      fs.writeFile("sample.json", JSON.stringify(newList), (err) => {
// //        if (err) {
// //          console.error(err);
// //          return;
// //        }
// //      });
// //      //console.log(json);
// //    });
// //    fs.readFile("sample.json", "utf8", (err, data) => {
// //      if (err) {
// //        console.error(err);
// //        return;
// //      }
// //      const json = JSON.parse(data);
// //      console.log(json);
// // });




// const newPerson = {
//      id: 1, // Added an ID for clarity
//      name: "Kumar",
//      age: 30,
//      city: "New York",
//      amount: 1500,
//  };

// // const addData = (id, data) => {
// //      fs.readFile("sample.json", "utf8", (err, data) => {
// //        if (err) {
// //          console.log(err);
// //          return;
// //        }
// //        const json = JSON.parse(data);
// //        const newjson = [...json, [id, data]];
// //        fs.writeFile("sample.json", JSON.stringify(newjson), (err) => {
// //          if (err) {
// //            console.error(err);
// //            return;
// //          }
// //        });
// //      });
// //    };
   
// //    const deleteData = (id) => {
// //      fs.readFile("sample.json", "utf8", (err, data) => {
// //        if (err) {
// //          console.log(err);
// //          return;
// //        }
// //        const json = JSON.parse(data);
// //        const newjson = json.filter((value) => {
// //          return value.id != id;
// //        });
// //        fs.writeFile("sample.json", JSON.stringify(newjson), (err) => {
// //          if (err) {
// //            console.error(err);
// //            return;
// //          }
// //        });
// //      });
// //    };
   
//    const updateData = (id, data) => {
//      fs.readFile("sample1.json", "utf8", (err, data) => {
//        if (err) {
//          console.log(err);
//          return;
//        }
//        const json = JSON.parse(data);
//        const newjson = json.filter((value) => {
//          return value.id != id;
//        });
//        const new1json = [...newjson, [id, data]];
//        fs.writeFile("sample1.json", JSON.stringify(new1json), (err) => {
//          if (err) {
//            console.error(err);
//            return;
//          }
//        });
//      });
//    };
   
//    const readData = ()=>{
//        fs.readFile("sample.json", "utf8", (err, data) => {
//            if (err) {
//              console.log(err);
//              return;
//            }
//            const json = JSON.parse(data);
//            console.log(json);
//        });
//    }


const http = require("http");
const calculate = require("./calculator");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write("<h1>Addition : " + calculate.add(5, 7) + "</h1>");
//   res.write("<h1>Subtraction : " + calculate.sub(10, 3) + "</h1>");
//   res.end("<h1>Multiplication : " + calculate.mul(5, 7) + "</h1>");
// });

// server.listen(3000, () => {
//   console.log("Server is running on http://127.0.0.1:3000");
// });

// fs.readFile("sample.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// fs.writeFile("sample1.txt", "hello world", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

const fs = require("fs");

function readData() {
  fs.readFile("sample.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(JSON.parse(data));
  });
}

function addData(nobj) {
  fs.readFile("sample.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const obj = JSON.parse(data);
    const nobj = [...obj, nobj];
    fs.writeFile("sample.json", JSON.stringify(nobj), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}

function deleteData(delName) {
  fs.readFile("sample.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const obj = JSON.parse(data);
    const nobj = obj.filter((item) => item.name !== delName);
    fs.writeFile("sample.json", JSON.stringify(nobj), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}

function updateData(upName, upAge) {
  fs.readFile("sample.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const obj = JSON.parse(data);
    const nobj = obj.map((item) => {
      if (item.name === upName) {
        item.age = upAge;
      }
      return item;
    });
    fs.writeFile("sample.json", JSON.stringify(nobj), (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
}

//readData();
//addData({ name: "John", age: 30, city: "New York" });
//deleteData("Doe");
//readData();
updateData("Smith", 35);
readData();