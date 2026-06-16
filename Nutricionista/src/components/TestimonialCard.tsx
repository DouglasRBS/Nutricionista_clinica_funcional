interface Props {
  name?: string;
  role?: string;
  text: string;
  image?: string;
  stars: number;
}

export default function TestimonialCard({ name, role, text, image, stars }: Props) {
  return (
    <div className="carousel-card">
      {image ? (
        <img src={image} alt={`Imagem perfil ${name}`} />
      ) : (
        <div style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          background: "#F9D5DC",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="#D4607A">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
      )}
      <span className="testimony">
        <p>{text}</p>
      </span>
      <span className="rating">
        {Array.from({ length: 5 }).map((_, i) =>
          i < stars ? (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#F5C518">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          ) : (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.5">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          )
        )}
      </span>
      {(name || role) && (
        <span className="names">
          {name && <p>{name}</p>}
          {role && <p>{role}</p>}
        </span>
      )}
    </div>
  );
}