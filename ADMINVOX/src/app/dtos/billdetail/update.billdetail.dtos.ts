import {
    IsString,
    IsNotEmpty,
} from 'class-validator';

export class UpdateBillDetailDTO {

    @IsNotEmpty()
    billDetailID: number;

    @IsNotEmpty()
    billID: number;

    @IsNotEmpty()
    washID: number;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    weight: number;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    billDetailStatus: boolean;

    constructor(data: any) {
        this.billDetailID = data.billDetailID;
        this.billID = data.billID;
        this.washID = data.washID;
        this.description = data.description;
        this.weight = data.weight;
        this.price = data.price;
        this.billDetailStatus = data.billDetailStatus;
    }
}
