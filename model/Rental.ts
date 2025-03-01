export default class Rental {
    RentalId!: number;
    CustomerId!: number;
    RentedAt!: Date;
    ReturnBy!: Date;
    RentingDetails!: RentingDetails[];
}

export class RentingDetails {
    RentingDetailsId!: number;
    RentalId!: number;
    RentalItemId!: number;
    Quantity!: number;
    Price!: number;
}