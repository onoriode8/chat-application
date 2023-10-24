import BusinessOffer from './businessOffer/business_offer';

import salonImage from '../../assests/salon_image.webp'

import classes from './home.module.css'

const home = () => (
    <div>
        <div className={classes.container}>
            <div>
                <img className={classes.image_container} src={salonImage} alt="" />
            </div>
            <div className={classes.text_container}>
                <h1>Experience Luxury Hair Making And Hair 
                        Treatment At Rukky Empire Salon
                </h1>
                <p><b><strong>We Deal on:</strong> * Fixing Of Hairs * Fixing Of Weavon * Revamping Of Wigs * Retouching Of Hair *
                    Installation Of Frontal * Fixing Of Nails & EyeLashes * Sales Of Hair Accessories *
                    Sales Of Wigs * Wigging Of Weavon * Sales Of Human Hair * And Packet Hair * Sale Of Body Spray & Rollon *
                    Pedicure & Manicure.
                    </b></p>
                <button>Contact</button>
            </div>
        </div>
        <div>
            <BusinessOffer />
        </div>
    </div>
);

export default home;