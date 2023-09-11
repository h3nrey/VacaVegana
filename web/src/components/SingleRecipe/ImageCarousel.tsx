export default function ImageCarousel({ images }: { images: string[] }) {
    return (
        <div className="flex gap-4">
            {images.map(image => (
                <img
                    key={image}
                    className="w-[26rem] h-[15rem] rounded-md object-cover"
                    src={image}
                    alt=""
                />
            ))}
        </div>
    )
}