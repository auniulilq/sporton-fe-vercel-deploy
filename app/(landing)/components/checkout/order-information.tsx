import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
    return (
       <CardWithHeader title="Order Information">
        <div className="p-5">
                <div>
                    <div className="input-group">
                        <label htmlFor="full_name">Full Name</label>
                        <input type="text" placeholder="Type your Full Name" id="full_name" />
                    </div>
                     <div className="input-group">
                        <label htmlFor="wa_number">Whatsapp Number</label>
                        <input type="text" 
                        placeholder="Type your Whatsapp Number" id="wa_number" />
                    </div>
                     <div className="input-group">
                        <label htmlFor="shipping_address">Shipping Address</label>
                        <textarea 
                        placeholder="Type your Shipping Address" 
                        id="shipping_address" 
                        rows={7}
                        />
                    </div>
                </div>
            </div>
       </CardWithHeader>
    )
}

export default OrderInformation;