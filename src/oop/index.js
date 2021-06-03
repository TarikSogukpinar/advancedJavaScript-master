export class BaseCustomer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}
//prototyping
let customer = new BaseCustomer(1, "123445");

customer.name = "Murat Kurtboğan"
console.log(customer.name);

BaseCustomer.bisey = "Bir şey";
console.log(BaseCustomer.bisey)

console.log(customer.customerNumber)

class IndividualCustomer extends BaseCustomer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber);
        this.firstName = firstName;
    }
}

class CorporateCustomer extends BaseCustomer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber);
        this.companyName = companyName;
    }
}