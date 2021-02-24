window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({ from: "0x8d72700362294c6BfE5C1e86Fa79759dd3c5c02C",
    to: "0xD1Cef25E3eC4Dc8059435809926D052678dc2b22", 
    value: web3.toWei(1, "ether"), 
}, function(err, transactionHash) {
    if (err) { 
        console.log(err); 
    } else {
        console.log(transactionHash);
    }});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({from: "0x8d72700362294c6BfE5C1e86Fa79759dd3c5c02C",
    to: "0xD1Cef25E3eC4Dc8059435809926D052678dc2b22", 
    value: web3.toWei(1, "ether"), 
}, function(err, transactionHash) {
    if (err) { 
        console.log(err); 
    } else {
        console.log(transactionHash);
    }});
    }
    // Non-dapp browsers...
  else {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3300"));
  }
});
  // Old web3 provider

//console.log (window.web3.currentProvider)

// contractAddress and abi are setted after contract deploy
var contractAddress = '0xCE3c3faA780254c80cAF3a97675c5aa27BA243E0';
var abi = JSON.parse( `[
	{
		"constant": false,
		"inputs": [
			{
				"name": "ID",
				"type": "uint256"
			},
			{
				"name": "firstName",
				"type": "string"
			},
			{
				"name": "lastName",
				"type": "string"
			},
			{
				"name": "passportcount",
				"type": "uint256"
			},
			{
				"name": "eyeColor",
				"type": "string"
			},
			{
				"name": "gender",
				"type": "string"
			},
			{
				"name": "bornLocation",
				"type": "string"
			},
			{
				"name": "bornDate",
				"type": "uint256"
			}
		],
		"name": "addPerson",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newComm",
				"type": "address"
			}
		],
		"name": "setCommandant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_passportId",
				"type": "uint256"
			}
		],
		"name": "getOnePassportDetail",
		"outputs": [
			{
				"name": "nationID",
				"type": "uint256"
			},
			{
				"name": "passportDelivryDate",
				"type": "uint256"
			},
			{
				"name": "passportExpirationDate",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "s",
				"type": "string"
			}
		],
		"name": "stringToUint",
		"outputs": [
			{
				"name": "result",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_passportId",
				"type": "uint256"
			},
			{
				"name": "_personalID",
				"type": "uint256"
			},
			{
				"name": "_addressline1",
				"type": "string"
			},
			{
				"name": "_city",
				"type": "string"
			},
			{
				"name": "_district",
				"type": "string"
			},
			{
				"name": "_state",
				"type": "string"
			},
			{
				"name": "_country",
				"type": "string"
			}
		],
		"name": "addPersonLocation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_personalId",
				"type": "uint256"
			}
		],
		"name": "getPersonById",
		"outputs": [
			{
				"name": "firstName",
				"type": "string"
			},
			{
				"name": "lastName",
				"type": "string"
			},
			{
				"name": "bornLocation",
				"type": "string"
			},
			{
				"name": "passportcount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newCreator",
				"type": "address"
			}
		],
		"name": "setCreator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "nationID",
				"type": "uint256"
			},
			{
				"name": "nation",
				"type": "string"
			}
		],
		"name": "addNation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lieutnantAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newLieut",
				"type": "address"
			}
		],
		"name": "setLieutnant",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "commandantAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_newCap",
				"type": "address"
			}
		],
		"name": "setCaptain",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_personalId",
				"type": "uint256"
			},
			{
				"name": "_nationID",
				"type": "uint256"
			}
		],
		"name": "addPassportDetails",
		"outputs": [
			{
				"name": "isAuthorized",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "captainAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "creatorAddress",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_passportId",
				"type": "uint256"
			}
		],
		"name": "getPassportByIdLocation",
		"outputs": [
			{
				"name": "addressline1",
				"type": "string"
			},
			{
				"name": "city",
				"type": "string"
			},
			{
				"name": "district",
				"type": "string"
			},
			{
				"name": "state",
				"type": "string"
			},
			{
				"name": "country",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]` );

//contract instance
contract = web3.eth.contract(abi, contractAddress);

// Accounts
var account;

web3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    alert("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {
    alert("No account found! Make sure the Ethereum client is configured properly.");
    return;
  }
  account = accounts[0];
  console.log('Account: ' + account);
  web3.eth.defaultAccount = account;
});
var count=0;
//Smart contract functions
/*function ID() {
  info = $("#newInfo").val();
  contract.methods.setInfo (info).send( {from: account}).then( function(tx) {
    console.log("Transaction: ", tx);
  });
  $("#newInfo").val('');
}*/
function passbyid() {
  var persId;
  pasId= document.getElementById("getpasid").value;
  contract.methods.getOnePassportDetail(pasId).call().then( function(nationID, passcreate,passexp ) {

    document.getElementById("nationID").innerHTML = nationID;
	document.getElementById("passcreate").innerHTML = passcreate;
	document.getElementById("passexp").innerHTML = passexp;
  });
}

function addpers() {
  var persId= document.getElementById("adprsid").value;
  var fname= document.getElementById("adprsfn").value;
  var lname= document.getElementById("adprsln").value;
  var passcount= document.getElementById("adprspc").value;
  var eyecol= document.getElementById("adprseye").value;
  var gender= document.getElementById("adprsgen").value;
  var dob= document.getElementById("adprsdob").value;

  contract.methods.addPerson(persId,fname,lname,passcount,eyecol,gender,dob).call();
}

function addpass() {
  var pasId= document.getElementById("adpasid").value;
  var natid= document.getElementById("adpasnid").value;
 
  contract.methods.addPassportDetails(pasId,natid).call().then( function(passid ) {
  document.getElementById("pid").innerHTML = passid;
  count=count+1;
  });
}

function addloc() {
  var pasId= document.getElementById("adlocpasid").value;
  var persid= document.getElementById("adlocprsid").value;
  var ad1= document.getElementById("adlocad1").value;
  var city= document.getElementById("adloccity").value;
  var dist= document.getElementById("adlocdis").value;
  var state= document.getElementById("adlocsta").value;
  var country= document.getElementById("adloccon").value;
  contract.methods.addPersonLocation(pasId,persid,ad1,city,dist,state,country).call();
}

function personbyid() {
  var persId;
  var count=0;
  persId= document.getElementById("getprsid").value;
  contract.methods.getPersonById(persId).call().then( function(firstName, lastName, bornLocation, passportcount ) {

    document.getElementById("fname").innerHTML = firstName;
	document.getElementById("lname").innerHTML = lastName;
	document.getElementById("bornloc").innerHTML = bornLocation;
	document.getElementById("passcount").innerHTML = passportcount;

  });
}



function init(){
        document.getElementById('passbyID').onclick=function(){passbyid();};
        document.getElementById('addpass').onclick=function(){addpass();};
        document.getElementById('addperson').onclick=function(){addpers();};
		document.getElementById('addlocat').onclick=function(){addloc();};
		document.getElementById('personbyID').onclick=function(){personbyid();};
}
window.onload=init;

