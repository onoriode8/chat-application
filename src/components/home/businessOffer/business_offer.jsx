import Offer from '../../../utils/reusedComponents/offer/offer';

import classes from './business_offer.module.css'

import braid_image from '../../../assests/braid_image.jpg'
import weavon_image from '../../../assests/weavon-image.jpg'
import wig_image from '../../../assests/wigs_img.jpg'
import retouching_hair_image from '../../../assests/retouching_img.jpg'
import frontal_wig_image from '../../../assests/frontal_wig.jpg'
import nails_eyelashes_image from '../../../assests/nails_eyelashes_image.jpg'




const businessOffer = () => (
    <div className={classes.container}>
        <div className={classes.div_container}>
            <h1><strong>What We Offer</strong></h1>
            <div></div>
        </div>
        <div className={classes.offer_container}>
            <Offer title="Fixing Of Braid" icon={braid_image}/>
            <Offer title="Fixing Of Weavon" icon={weavon_image}/>
            <Offer title="Revamping Of Wigs" icon={wig_image}/>
            <Offer title="Retouching Of Hair" icon={retouching_hair_image}/>
            <Offer title="Installation Of Frontal" icon={frontal_wig_image}/>
            <Offer title="Fixing Of Nails & Eyelashes" icon={nails_eyelashes_image} />

        </div>
    </div>
);

export default businessOffer;