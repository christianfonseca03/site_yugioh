interface StepsProps {
    img: string;
    altText: string;
    text: string;
}
//haha
export function Steps({img,altText,text}:StepsProps) {
    return (
        <section className="relative justify-center items-center">
            <img src={img} alt={altText} />
            <p className="text-white bg-red-500">{text}</p>
        </section>
    )
}

