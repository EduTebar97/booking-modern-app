import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Remove these imports as we will use Tailwind and the new global styles
// import "./../assets/css/booking/bootstrap.min.css";
// import "./../assets/css/booking/mdb.min.css";
// import "./../assets/css/booking/plugins.css";
// import "./../assets/css/booking/style.css";
// import "./../assets/css/booking/coloring.css";
// import "./../assets/css/booking/colors/scheme-01.css";
import { getAccomodations } from "apis/apis";

function BookingCardGroup() {
  const navigate = useNavigate();
  const [accommodations, setAccommodations] = useState(null);
  const carouselRef = useRef(null);

  // Función para obtener la lista de propiedades mínimas y luego sus detalles
  const fetchAccommodations = async () => {
    try {
      // Primero obtenemos la lista de propiedades (se asume que retorna al menos un campo "id")
      const listResponse = await getAccomodations();
      const list = listResponse.data; // Array con propiedades mínimas

      // Para cada propiedad, obtenemos los detalles usando el endpoint detallado
      const detailedList = await Promise.all(
        list.map(item =>
          axios
            .get(`https://gloove-api-avantio.onrender.com/accommodations-add/${item.id}`)
            .then(res => res.data)
            .catch(err => {
              console.error("Error fetching detail for id", item.id, err);
              return null;
            })
        )
      );
      // Filtrar las propiedades que se pudieron obtener correctamente
      setAccommodations(detailedList.filter(item => item !== null));
    } catch (err) {
      console.error("Error fetching accommodations:", err);
    }
  };

  useEffect(() => {
    fetchAccommodations();
  }, []);

  // Funciones para navegar en el Carousel
  const goToPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const goToNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const responsive2 = {
    desktop: {
      breakpoint: { max: 3000, min: 2180 },
      items: 5,
      slidesToSlide: 1,
    },
    laptop1: {
      breakpoint: { max: 2180, min: 1780 },
      items: 4,
      slidesToSlide: 1,
    },
    laptop2: {
      breakpoint: { max: 1780, min: 1380 },
      items: 3,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 1380, min: 980 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile1: {
      breakpoint: { max: 980, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section
      id="section-cards"
      className="mx-auto h-fit relative"
      style={{ /* Consider replacing inline styles with Tailwind */ }}
    >
      {/* Navigation buttons - consider restyling with Tailwind */} 
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 -left-20 rounded-full w-12 h-12 bg-transparent border-0 text-white text-5xl"
      >
        <span className="custom-arrow text-gray-400">
          &#11164;
        </span>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 -right-20 rounded-full w-12 h-12 bg-transparent border-0 text-white text-5xl"
      >
        <span className="custom-arrow text-gray-400">
          &#11166;
        </span>
      </button>
      {accommodations ? (
        <Carousel
          responsive={responsive2}
          showDots={true}
          infinite={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={5000}
          dotListClass="custom-dot-list-style"
          slidesToSlide={1}
          ref={carouselRef}
          className="flex justify-center relative"
          style={{ /* Consider replacing inline styles with Tailwind */ }}
        >
          {accommodations.map((accom, index) => {
            // Extraer la descripción en español de la galería
            const descObj = accom.gallery?.data?.description;
            const descriptionHTML =
              descObj && Array.isArray(descObj)
                ? descObj.find((d) => d.language === "es_ES")?.text
                : "";
            return (
              <div
                key={accom.id} // Usar id como key única
                className="bg-white rounded-lg shadow-lg p-6 text-center max-w-sm mx-auto flex flex-col items-center h-[550px] w-[350px] border border-black"
                style={{ /* Remove inline styles here or replace with Tailwind */ }}
              >
                <img
                  src={
                    accom.gallery?.data?.images && accom.gallery.data.images.length > 0
                      ? accom.gallery.data.images[0].url
                      : ""
                  }
                  alt="card img"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p
                  className="text-xl font-bold text-gray-800 mb-2 text-[#522D3C] font-black tracking-wide leading-tight h-12 flex items-center justify-center"
                >
                  {accom.data?.name || ""}
                </p>
                <div
                  className="flex justify-center items-center w-11/12 gap-4"
                >
                  {/* Para evitar nesting warnings, usamos un div en lugar de <p> */}
                  <div
                    dangerouslySetInnerHTML={{ __html: descriptionHTML }}
                    className="text-sm text-black font-semibold leading-tight w-full overflow-y-auto h-24"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <p
                    className="text-xs text-black font-semibold mx-6"
                  >
                    View Details &gt;
                  </p>
                </div>
                <p
                  className="text-base text-[#156B7A] font-black mt-auto mb-2"
                >
                  o cajea por 50 Gloove point
                </p>
                <button
                  onClick={() => navigate(`/car-single/${accom.id}`)}
                  className="w-full h-12 bg-[#156B7A] border-0 rounded-full text-white text-base font-semibold"
                >
                  AÑADIR A MI VIAJE
                </button>
              </div>
            );
          })}
        </Carousel>
      ) : (
        <div className="text-center">Cargando propiedades...</div>
      )}
      <div className="w-full flex justify-center">
        <button
          className="w-52 h-9 m-5 border-3 border-[#156B7A] rounded-full bg-[#dddddd] text-[#156B7A] font-black"
        >
          IR A EXPERIENCIAS
        </button>
      </div>
    </section>
  );
}

export default BookingCardGroup;