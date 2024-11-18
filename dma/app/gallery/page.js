'use client';


const Gallery = () => {
    const images = [
        // Add your image URLs here
        '/dma_picture_1.jpg',
        '/dma_picture_2.jpg',
        '/dma_picture_3.jpg',
    ];

    return (
        <div>
            <h1>Gallery</h1>
            <div className="gallery">
                {images.map((src, index) => (
                    <div key={index} className="gallery-item">
                        <img src={src} alt={`Gallery image ${index + 1}`} />
                    </div>
                ))}
            </div>
            <style jsx>{`
                .gallery {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                }
                .gallery-item {
                    flex: 1 1 calc(33.333% - 16px);
                    box-sizing: border-box;
                }
                .gallery-item img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
            `}</style>
        </div>
    );
};

export default Gallery;