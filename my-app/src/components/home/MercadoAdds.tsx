import Image from "next/image";
import { images } from "../../data/anuncios"

const MercadoAdds = () => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 ">
      {images.map((image, index) => (
        <div key={index} className="max-w-62.5 mx-auto">
          <Image
            src={image}
            alt={`Anuncio ${index + 1}`}
            className="w-full h-auto"
            width={500}
            height={300}
          />
        </div>
      ))}
    </div>
  );
};

export default MercadoAdds;