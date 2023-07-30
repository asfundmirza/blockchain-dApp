// // SPDX-License-Identifier: MIT

// pragma solidity>=0.5.0<0.9.0;

// contract eventsDapp{
//     // struct Events{
//     //     address organizer;
//     //     string name;
//     //     uint date;
//     //     uint price;
//     //     uint ticketsCount;
//     //     uint ticketsRemain;
//     // }
//     // mapping(uint=>Events) public events;
//     // mapping(address=>mapping (uint=>uint)) public tickets;
//     mapping(address=>uint) public balances;
//     // uint eventsID;

//     // function createEvent(string memory _name,uint _date,uint _price,uint _ticketsCount) external {
//     //     require(_price>0,"price should be greater than zero");
//     //     require(_date>=block.timestamp,"time should be greater than current time");
//     //     events[eventsID]=Events(msg.sender,_name,_date,_price,_ticketsCount,_ticketsCount);
//     //     eventsID++;

//     // }
//     // function buyTicket(uint ID,uint quantity) external payable {
//     //     require(msg.value>=events[ID].price*quantity,"price is not enough to buy this ticket");
//     //     require(events[ID].ticketsRemain>=quantity,"tickets have been sold out");
//     //     require(events[ID].date>block.timestamp,"this event has been closed");
//     //     tickets[msg.sender][ID]+=quantity;
//     //     events[ID].ticketsCount-=quantity;
//     // }

//     // function tranfer(uint ID,uint quantity,address to) external{
//     //     require(tickets[msg.sender][ID]>=quantity,"you dont have enough tickets");
//     //     require(events[ID].date!=0,"events has finished");
//     //     tickets[msg.sender][ID]-=quantity;
//     //     tickets[to][ID]+=quantity;

//     // }
//     // function getTickets(uint ID,address owner) public view returns(uint){
//     //     return tickets[owner][ID];
//     // }
//     //check balance of any address
//     function getBalance(address _address) public view returns(uint){
//         return (_address).balance;
//     }
//     //send balance to contract
//     function sendEther() public payable {

//     }
//     //transfer balance from contract to other address
//     function tranferEther(address _address, uint amount) public payable {
//         payable (_address).transfer(amount);
//     }
//     //check the contract balance
//     function contractBalance()public view returns(uint){
//         return address(this).balance;
//     }
//     //transfer balance from one account to another
//     function tranferBalance(address to,uint amount) public payable {
//         require(balances[msg.sender]>amount,"balance is not enough");
//         balances[msg.sender]-=amount;
//         balances[to]+=amount;
//     }
// }
