const fs = require('fs');
const { PassThrough } = require('stream');

class Ticket {
  constructor(num, desktop) {
    this.num = num;
    this.desktop = desktop;
  }
}

class TicketControl {
  constructor() {
    this.ultimo = 0;
    this.today = new Date().getDate();
    this.tickets = [];
    this.last4 = [];

    let data = require('../data/data.json');
    if (data.hoy === this.today) {
      this.ultimo = data.ultimo;
      this.tickets = data.tickets;
      this.last4 = data.last4;
    } else {
      this.restartCount();
    }
  }

  nextTicket() {
    this.ultimo +=1;
    let ticket = new Ticket(this.ultimo, null);
    this.tickets.push(ticket);
    this.saveFile();
    return `Ticket ${this.ultimo}`;
  }

  getLastTicket = () => `Ticket ${this.ultimo}`;
  getLast4 = () => this.last4;

  attendTicket(desktopNum){
    if(this.tickets.length === 0){
      return 'No hay tickets';
    }
    let ticketNum = this.tickets[0].num;
    this.tickets.shift();

    let ticketAttended = new Ticket(ticketNum, desktopNum);
    this.last4.unshift( ticketAttended);
    if (this.last4.length > 4) {
      console.log("Ya hay 4")
      this.last4.pop();
    }
    this.saveFile();

    return ticketAttended;
  }

  saveFile() {
    let jsonData = {
      ultimo: this.ultimo,
      hoy: this.today,
      tickets: this.tickets,
      last4: this.last4
    };
    let jsondataString = JSON.stringify(jsonData);
    fs.writeFileSync('./server/data/data.json', jsondataString);
    console.log("Se ha inicializado el sistema");
  }

  restartCount() {
    this.ultimo = 0;
    this.tickets = [];
    this.last4 = [];
    console.log("Se ha inicializado el sistema");
    this.saveFile();
  }
}

module.exports = {
  TicketControl
}