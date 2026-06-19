import Image from "next/image";
import { images } from "../../data/anuncios"

const MercadoAdds = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Anuncio ${index + 1}`}
          className="w-full h-auto"
          width={500}
          height={300}
        />
      ))}
    </div>
  );
};

export default MercadoAdds;