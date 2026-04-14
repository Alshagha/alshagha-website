import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const images = [
        { src: '/images/testament_1.png', alt: 'وصية 1' },
        { src: '/images/testament_2.png', alt: 'وصية 2' },
        { src: '/images/testament_3.png', alt: 'وصية 3' }
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="gallery section-padding" id="gallery">
            <div className="container">
                <h2 className="section-title text-center">الوصايا والمخطوطات</h2>
                <p className="section-subtitle text-center">
                    وصايا ومخطوطات تاريخية تعود للشيخ <strong>محمد بن منصور بن محمد بن حمود العفراني الحتيرشي الهذلي (راعي الشقحاء)</strong> تعكس إرثه وقيمه.
                </p>

                <div className="gallery-grid">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`gallery-item fade-in-up delay-${idx + 1}`}
                            onClick={() => setSelectedImage(img.src)}
                        >
                            <div className="image-overlay">
                                <span>عرض الوصية</span>
                            </div>
                            <img src={img.src} alt={img.alt} loading="lazy" />
                        </div>
                    ))}
                </div>

                {selectedImage && (
                    <div className="lightbox" onClick={() => setSelectedImage(null)}>
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage} alt="الوصية" className="lightbox-img" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
