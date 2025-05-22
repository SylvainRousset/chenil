export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-2"
    >
      {/* Montagnes en arrière-plan */}
      <path
        d="M5 35L15 25L25 35L35 25"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Silhouette du chien avec dégradé */}
      <defs>
        <linearGradient id="dogGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      
      {/* Silhouette du chien */}
      <path
        d="M20 5C15 5 10 8 8 13C6 18 7 23 10 27C12 30 15 32 20 32C25 32 28 30 30 27C33 23 34 18 32 13C30 8 25 5 20 5Z"
        fill="url(#dogGradient)"
        stroke="#1D4ED8"
        strokeWidth="1"
      />
      
      {/* Oreilles */}
      <path
        d="M12 12C12 12 10 15 12 18C14 21 17 20 17 20"
        stroke="#1D4ED8"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M28 12C28 12 30 15 28 18C26 21 23 20 23 20"
        stroke="#1D4ED8"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Museau */}
      <path
        d="M16 22C16 22 18 24 20 24C22 24 24 22 24 22"
        stroke="#1D4ED8"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Nez */}
      <circle cx="20" cy="20" r="1.5" fill="#1D4ED8" />
      
      {/* Yeux */}
      <circle cx="16" cy="17" r="1.2" fill="#1D4ED8" />
      <circle cx="24" cy="17" r="1.2" fill="#1D4ED8" />
      
      {/* Reflet dans les yeux */}
      <circle cx="16.5" cy="16.5" r="0.4" fill="white" />
      <circle cx="24.5" cy="16.5" r="0.4" fill="white" />
    </svg>
  );
} 