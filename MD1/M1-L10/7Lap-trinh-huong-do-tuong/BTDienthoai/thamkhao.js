class Mobile {
    constructor() {
        this.battery = 100;
        this.messageDraft = '';
        this.inbox = [];
        this.sent = [];
        this.isOn = false;
    }

    checkBattery() {
        return this.battery;
    }

    turnOn() {
        if (!this.isOn) {
            this.isOn = true;
            this.battery--;
            console.log('Mobile is on.');
        } else {
            console.log('Mobile is already on.');
        }
    }

    turnOff() {
        if (this.isOn) {
            this.isOn = false;
            this.battery--;
            console.log('Mobile is off.');
        } else {
            console.log('Mobile is already off.');
        }
    }

    chargeBattery() {
        if (this.battery < 100) {
            this.battery++;
            console.log('Battery is charged.');
        } else {
            console.log('Battery is already full.');
        }
    }

    createMessage(text) {
        if (this.isOn) {
            this.messageDraft = text;
            this.battery--;
            console.log('Message draft created.');
        } else {
            console.log('Mobile is off. Cannot create message.');
        }
    }

    receiveMessage(message) {
        if (this.isOn) {
            this.inbox.push(message);
            this.battery--;
            console.log('Message received.');
        } else {
            console.log('Mobile is off. Cannot receive message.');
        }
    }

    sendMessage(phone, message) {
        if (this.isOn) {
            phone.receiveMessage(message);
            this.sent.push(message);
            this.battery--;
            console.log('Message sent.');
        } else {
            console.log('Mobile is off. Cannot send message.');
        }
    }

    viewInbox() {
        if (this.isOn) {
            console.log('Inbox:', this.inbox);
            this.battery--;
        } else {
            console.log('Mobile is off. Cannot view inbox.');
        }
    }

    viewSent() {
        if (this.isOn) {
            console.log('Sent messages:', this.sent);
            this.battery--;
        } else {
            console.log('Mobile is off. Cannot view sent messages.');
        }
    }
}

let nokia = new Mobile();
let iphone = new Mobile();

nokia.turnOn();
nokia.createMessage('Hello iPhone!');
nokia.sendMessage(iphone, nokia.messageDraft);
iphone.viewInbox();