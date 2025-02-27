export default class Booking {
    BookingId!: number;
    BookedAt!: Date;
    EventDate!: Date;
    CustomerId!: number;
    BookingDetails!: BookingDetails[];
}

export class BookingDetails {
    BookingDetailsId!: number;
    BookingId!: number;
    PackageId!: number;
    Price!: number;
    Advance!: number;
    TotalPrice!: number;
}