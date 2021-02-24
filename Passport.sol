pragma solidity ^0.4.22;
import "github.com/Arachnid/solidity-stringutils/strings.sol";
import './BaseAccesControl.sol';

contract Passport is BaseAccesControl {
    using strings for *;
    struct Person {
        uint personnalId;
        string firstName;
        string lastName;
        uint passportcount;
        string eyeColor;
        string gender;
        string bornLocation;
        uint bornDate;


        mapping(uint => LocalAdrress) location;
     
        mapping(uint => PassportDetails) passport;
        mapping(uint => Nation) nationality;
    }

    struct PassportDetails {
        uint passportId;
        uint personnalId;
        uint passportExpirationDate;
        uint passportDelivryDate;
        uint nationID;
        bool isAuthorized;
        address officierAddress;
        
        mapping(uint => LocalAdrress) location;
    }

    struct LocalAdrress {
        string addressline1;
        string city;
        string district;
        string state;
        string country;
    }

    
    struct Nation{
        uint nationID;
        string nation;
    }

    mapping(uint => Person) passportById;
    mapping(uint => PassportDetails) passport;
    mapping(uint => Nation) nationality;
    uint totalPassportCount = 0;

    // utility function
    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
    if (_i == 0) {
        return "0";
    }
    uint j = _i;
    uint len;
    while (j != 0) {
        len++;
        j /= 10;
    }
    bytes memory bstr = new bytes(len);
    uint k = len - 1;
    while (_i != 0) {
        bstr[k--] = byte(uint8(48 + _i % 10));
        _i /= 10;
    }
    return string(bstr);
}

    function stringToUint(string s) constant returns (uint result) {
        bytes memory b = bytes(s);
        uint i;
        result = 0;
        for (i = 0; i < b.length; i++) {
            uint c = uint(b[i]);
            if (c >= 48 && c <= 57) {
                result = result * 10 + (c - 48);
            }
        }
    }

    function addNation(uint nationID, string nation) external onlyCaptain() {
        // make it required
       
        require( nation.toSlice().len() > 0);
       

        nationality[nationID] = Nation(nationID, nation);

    }



    function addPerson(uint ID, string firstName, string lastName,uint passportcount, string eyeColor, string gender, string bornLocation, uint bornDate) external onlyCaptain() {
        // make it required
        require( firstName.toSlice().len() > 0);
        require( lastName.toSlice().len() > 0);
       

        passportById[ID] = Person(ID, firstName, lastName,  passportcount, eyeColor, gender,bornLocation, bornDate);

        totalPassportCount++;
    }

 function addPersonLocation (
      uint _passportId,
      uint _personalID,
      string _addressline1,
      string _city,
      string _district,
      string _state,
      string _country) external onlyCaptain() {
        // non null check
        
   
       require( _addressline1.toSlice().len() > 0);

       require( _city.toSlice().len() > 0);
       require( _district.toSlice().len() > 0);
       require( _state.toSlice().len() > 0);
       require( _country.toSlice().len() > 0);

       require(_personalID >= 0);
        
        passportById[_personalID].location[_passportId].addressline1 = _addressline1;
        passportById[_personalID].location[_passportId].addressline1 = _addressline1;
        passportById[_personalID].location[_passportId].city = _city;
        passportById[_personalID].location[_passportId].district = _district;
        passportById[_personalID].location[_passportId].state = _state;
        passportById[_personalID].location[_passportId].country = _country;
    }




  
    function addPassportDetails(uint _personalId, uint _nationID) external onlyCaptain() returns (bool isAuthorized) {
        
        uint temp;
        temp=stringToUint(uint2str(_personalId).toSlice().concat(uint2str(_nationID).toSlice()));
        passportById[_personalId].passport[temp].passportId = temp;
        passportById[_personalId].passport[temp].personnalId= _personalId;
        passportById[_personalId].passport[temp].nationID= _nationID;
        passportById[_personalId].passport[temp].passportDelivryDate = now;
        passportById[_personalId].passport[temp].passportExpirationDate = now + (5 * 52 weeks);
        passportById[_personalId].passport[temp].isAuthorized = true;
        passportById[_personalId].passport[temp].officierAddress = msg.sender;
        passportById[_personalId].passportcount=passportById[_personalId].passportcount+1;
        return true;

    }

    function getPersonById(uint _personalId) public view returns (string firstName, string lastName, string bornLocation,uint passportcount)
    {
        return (passportById[_personalId].firstName,
                passportById[_personalId].lastName,
                passportById[_personalId].bornLocation,
                passportById[_personalId].passportcount
                );
    }
    
    function getOnePassportDetail(uint _passportId) public view returns (uint nationID, uint passportDelivryDate, uint passportExpirationDate)
    {

        
     
        return (
                passport[_passportId].nationID,
                passport[_passportId].passportDelivryDate,
                passport[_passportId].passportExpirationDate
                );
    }

    function getPassportByIdLocation(uint _passportId)
      public view returns (string addressline1, string city, string district, string state, string country){
    
        string _addressline1= passportById[_passportId].location[_passportId].addressline1;
        string _city = passportById[_passportId].location[_passportId].city;
        string _district = passportById[_passportId].location[_passportId].district;
        string _state = passportById[_passportId].location[_passportId].state;
        string _country = passportById[_passportId].location[_passportId].country;

        return (_addressline1, _city, _district, _state, _country);
    }



  
}