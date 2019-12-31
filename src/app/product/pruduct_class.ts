export class product_class {
  constructor(
    public product_id: number,
    public name: string,
    public price: number,
    public stock: number,
    public mfg_date: Date,
    public warranty: number,
    public fk_seller_email: string

  ) { }
}
