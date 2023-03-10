import React from 'react';
import UniLogo from './UniLogo/UniLogo';

export default function Partners() {

    const imageList = [
        "https://1000logos.net/wp-content/uploads/2022/08/MIT-Logo.png",
        "https://1000logos.net/wp-content/uploads/2018/02/Stanford-University-Logo.png",
        "https://www.cmu.edu/brand/brand-guidelines/images/wordmarksquare-red-600x600.png",
        "https://logos-world.net/wp-content/uploads/2022/02/UC-Berkeley-Emblem.png",
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Cornell_University_Logo.png"
    ];

    return (
        <section className="service-section px-5 py-5">
            <div className="container-fluid">
                <div className="row justify-content-center py-3">
                    <div className="col-md-8 col-12 text-center">
                        <p className="service-main-heading">Partner Universities</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {imageList.map((image, index) =>
                        <UniLogo key={index} imageAddr={image} />
                    )}
                </div>
            </div>
        </section>
    )
}
