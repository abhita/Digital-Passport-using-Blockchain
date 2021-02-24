pragma solidity ^0.4.22;
contract BaseAccesControl {
    address public creatorAddress;
    address public commandantAddress;
    address public captainAddress=0x5B38Da6a701c568545dCfcB03FcB875f56beddC4;
    address public lieutnantAddress;

    constructor() {
        creatorAddress = msg.sender;
    }

    modifier onlyCreator() {
        require(msg.sender == creatorAddress);
        _;
    }

    modifier onlyCommandant() {
        require(msg.sender == commandantAddress);
        _;
    //    || msg.sender == creatorAddress );   
    }
    modifier onlyCaptain() {
        require(msg.sender == captainAddress
        || msg.sender == commandantAddress);
        _;
    //    || msg.sender == creatorAddress );
      
    }
    modifier onlyLieutnant() {
        require(msg.sender == lieutnantAddress
        || msg.sender == captainAddress
        || msg.sender == commandantAddress);
        _;
      //  || msg.sender == creatorAddress );
        
    }

    function setCreator(address _newCreator) external onlyCreator() {
        require(_newCreator != address(0));
        creatorAddress = _newCreator;
    }
    function setCommandant(address _newComm) external onlyCommandant() {
        require(_newComm != address(0));
        commandantAddress = _newComm;
    }
    function setCaptain(address _newCap) external onlyCaptain() {
        require(_newCap != address(0));
        captainAddress = _newCap;
    }
    function setLieutnant(address _newLieut) external onlyLieutnant() {
        require(_newLieut != address(0));
        lieutnantAddress = _newLieut;
    }
}
