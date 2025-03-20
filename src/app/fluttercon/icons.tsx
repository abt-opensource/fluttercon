import type { JSX, SVGProps } from "react";

export const Icons = [
  {
    name: "home",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-labelledby="homeIconTitle"
      >
        <title id="homeIconTitle">Home Icon</title>
        <path d="M3 12l9-9 9 9M4 10v10h6v-6h4v6h6V10" />
      </svg>
    ),
  },

  {
    name: "Search",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-labelledby="searchIconTitle"
      >
        <title id="searchIconTitle">Search Icon</title>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },

  {
    name: "User",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="user-icon-title"
      >
        <title id="user-icon-title">User Icon</title>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20c0-4 3-6 6-6s6 2 6 6" />
      </svg>
    ),
  },
  {
    name: "Settings",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-labelledby="settingsIconTitle"
      >
        <title id="settingsIconTitle">Settings Icon</title>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a2 2 0 0 1 0-3.9M4.6 15a2 2 0 0 0 0-3.9M12 2v2M12 20v2M2 12h2M20 12h2M4.6 9l1.4-1.4M18 14.6l1.4 1.4M9 4.6L7.6 6M14.6 18l1.4 1.4" />
      </svg>
    ),
  },

  {
    name: "Bell",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="bell-icon-title"
      >
        <title id="bell-icon-title">Bell Icon</title>
        <path d="M8 18h8M10 20a2 2 0 0 0 4 0M6 16v-5a6 6 0 1 1 12 0v5M4 16h16" />
      </svg>
    ),
  },
  {
    name: "Message",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="message-icon-title"
      >
        <title id="message-icon-title">Message Icon</title>
        <path d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6l4 4v-4h4a2 2 0 0 0 2-2z" />
      </svg>
    ),
  },
  {
    name: "Camera",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="camera-icon-title"
      >
        <title id="camera-icon-title">Camera Icon</title>
        <circle cx="12" cy="12" r="3" />
        <path d="M4 8h16M4 8l2-3h12l2 3M4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      </svg>
    ),
  },
  {
    name: "Heart",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="heart-icon-title"
      >
        <title id="heart-icon-title">Heart Icon</title>
        <path d="M12 21s-6-4.8-8-8c-2-3.3-.2-7.5 3.4-8.8 3-1 6.1 1 6.6 1.4.5-.4 3.6-2.4 6.6-1.4C20.2 5.5 22 9.7 20 13c-2 3.2-8 8-8 8z" />
      </svg>
    ),
  },
  {
    name: "Play",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="play-icon-title"
      >
        <title id="play-icon-title">Play Icon</title>
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    name: "Pause",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="pause-icon-title"
      >
        <title id="pause-icon-title">Pause Icon</title>
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </svg>
    ),
  },
  {
    name: "Trash",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="trash-icon-title"
      >
        <title id="trash-icon-title">Trash Icon</title>
        <path d="M3 6h18M5 6v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      </svg>
    ),
  },
  {
    name: "Download",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-download"
      >
        <title id="icon-download">Download icon</title>
        <path d="M12 3v14M6 13l6 6 6-6M4 21h16" />
      </svg>
    ),
  },
  {
    name: "Upload",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-upload"
      >
        <title id="icon-upload">Upload icon</title>
        <path d="M12 21V7M6 11l6-6 6 6M4 3h16" />
      </svg>
    ),
  },

  {
    name: "Edit",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-edit"
      >
        <title id="icon-edit">Edit icon</title>
        <path d="M4 20h16M4 20L5 16l11-11a2 2 0 1 1 3 3L8 20H4z" />
      </svg>
    ),
  },
  {
    name: "Lock",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-lock"
      >
        <title id="icon-lock">Lock icon</title>
        <rect x="5" y="10" width="14" height="10" />
        <path d="M8 10V6a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    name: "Unlock",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-unlock"
      >
        <title id="icon-unlock">Unlock icon</title>
        <rect x="5" y="10" width="14" height="10" />
        <path d="M8 10V6a4 4 0 0 1 8 0" />
      </svg>
    ),
  },
  {
    name: "Folder",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-folder"
      >
        <title id="icon-folder">Folder icon</title>
        <path d="M3 6h6l2 2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    name: "Phone",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-phone"
      >
        <title id="icon-phone">Phone icon</title>
        <path d="M3 5a2 2 0 0 1 2-2h3l2 4-2 2-2-1a15 15 0 0 0 9 9l1-2 2-2 4 2v3a2 2 0 0 1-2 2h-3a19 19 0 0 1-11-11V5z" />
      </svg>
    ),
  },
  {
    name: "Globe",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-globe"
      >
        <title id="icon-globe">Globe icon</title>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2c3.87 0 7 4.48 7 10s-3.13 10-7 10" />
      </svg>
    ),
  },
  {
    name: "Key",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-key"
      >
        <title id="icon-key">Key icon</title>
        <circle cx="7" cy="12" r="3" />
        <path d="M10 12h10l-3-3m3 3l-3 3" />
      </svg>
    ),
  },

  {
    name: "Chat",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-chat"
      >
        <title id="icon-chat">Chat icon</title>
        <path d="M3 21v-4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4M8 12v-4a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    name: "Wifi",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-wifi"
      >
        <title id="icon-wifi">WiFi icon</title>
        <path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01" />
      </svg>
    ),
  },
  {
    name: "Location",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-location"
      >
        <title id="icon-location">Location icon</title>
        <path d="M12 21s-6-6.1-6-10a6 6 0 0 1 12 0c0 3.9-6 10-6 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    ),
  },
  {
    name: "Music",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-music"
      >
        <title id="icon-music">Music icon</title>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    name: "Cart",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-cart"
      >
        <title id="icon-cart">Shopping cart icon</title>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M2 3h4l3 13h12l3-8H6" />
      </svg>
    ),
  },
  {
    name: "Star",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-star"
      >
        <title id="icon-star">Star icon</title>
        <polygon points="12 2 15 10 23 10 17 14 19 22 12 17 5 22 7 14 1 10 9 10" />
      </svg>
    ),
  },
  {
    name: "Bookmark",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-bookmark"
      >
        <title id="icon-bookmark">Bookmark icon</title>
        <path d="M6 3h12a2 2 0 0 1 2 2v16l-8-4-8 4V5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    name: "Calendar",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-calendar"
      >
        <title id="icon-calendar">Calendar icon</title>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    name: "Clipboard",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-clipboard"
      >
        <title id="icon-clipboard">Clipboard icon</title>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 3h6a2 2 0 0 1 2 2v2H7V5a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    name: "Eye",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-eye"
      >
        <title id="icon-eye">Eye icon</title>
        <circle cx="12" cy="12" r="3" />
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      </svg>
    ),
  },
  {
    name: "Clock",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="icon-clock"
      >
        <title id="icon-clock">Clock icon</title>
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="6" x2="12" y2="12" />
        <line x1="12" y1="12" x2="16" y2="14" />
      </svg>
    ),
  },

  {
    name: "Bolt",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="boltIconTitle"
      >
        <title id="boltIconTitle">Bolt Icon</title>
        <polygon points="13 2 3 14 12 14 11 22 21 10 13 10" />
      </svg>
    ),
  },
  {
    name: "Paperclip",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="paperclipIconTitle"
      >
        <title id="paperclipIconTitle">Paperclip Icon</title>
        <path d="M21 12v6a5 5 0 0 1-10 0V5a3 3 0 0 1 6 0v10" />
      </svg>
    ),
  },
  {
    name: "Cat",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="catIconTitle"
      >
        <title id="catIconTitle">Cat Icon</title>
        <path d="M12 2s-3 2-3 5v3H7s-4 0-4 4 4 6 4 6h10s4-2 4-6-4-4-4-4h-2V7s0-3-3-5z" />
        <circle cx="9" cy="14" r="1" />
        <circle cx="15" cy="14" r="1" />
      </svg>
    ),
  },
  {
    name: "Dog",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="dogIconTitle"
      >
        <title id="dogIconTitle">Dog Icon</title>
        <path d="M5 11s-1 0-1 2 1 2 1 2h1v4s1 2 5 2 5-2 5-2v-4h1s1 0 1-2-1-2-1-2H5z" />
        <circle cx="9" cy="9" r="1" />
        <circle cx="15" cy="9" r="1" />
        <path d="M9 5s1-2 3-2 3 2 3 2" />
      </svg>
    ),
  },
  {
    name: "Fish",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="fishIconTitle"
      >
        <title id="fishIconTitle">Fish Icon</title>
        <path d="M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z" />
        <circle cx="15" cy="12" r="1" />
        <path d="M2 9s1 2 1 3-1 3-1 3" />
      </svg>
    ),
  },
  {
    name: "Bird",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="birdIconTitle"
      >
        <title id="birdIconTitle">Bird Icon</title>
        <path d="M12 2s3 3 3 6-3 6-3 6-3-3-3-6 3-6 3-6z" />
        <path d="M9 12s-4 2-4 5 2 4 2 4" />
        <path d="M15 12s4 2 4 5-2 4-2 4" />
      </svg>
    ),
  },
  {
    name: "Elephant",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="elephantIconTitle"
      >
        <title id="elephantIconTitle">Elephant Icon</title>
        <path d="M5 12s0-5 5-5h4s5 0 5 5v4s-2 3-5 3h-4s-5 0-5-3v-4z" />
        <circle cx="8" cy="10" r="1" />
        <path d="M16 10s3 1 3 3-3 3-3 3" />
      </svg>
    ),
  },
  {
    name: "Rabbit",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="rabbitIconTitle"
      >
        <title id="rabbitIconTitle">Rabbit Icon</title>
        <path d="M8 14s-3 0-3 3 3 3 3 3h8s3 0 3-3-3-3-3-3" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
        <path d="M9 6s1-2 3-2 3 2 3 2" />
      </svg>
    ),
  },
  {
    name: "Lion",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="lionIconTitle"
      >
        <title id="lionIconTitle">Lion Icon</title>
        <circle cx="12" cy="12" r="5" />
        <path d="M8 5s-2 0-3 3 1 5 1 5" />
        <path d="M16 5s2 0 3 3-1 5-1 5" />
        <path d="M10 16h4" />
      </svg>
    ),
  },
  {
    name: "Bear",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        stroke="currentColor"
        role="img"
        aria-labelledby="bearIconTitle"
      >
        <title id="bearIconTitle">Bear Icon</title>
        <circle cx="8" cy="8" r="2" />
        <circle cx="16" cy="8" r="2" />
        <circle cx="12" cy="12" r="4" />
        <path d="M10 14h4" />
      </svg>
    ),
  },

  {
    name: "Fox",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        role="img"
        aria-labelledby="foxTitle"
        stroke="currentColor"
      >
        <title id="foxTitle">Fox Icon</title>
        <path d="M6 6s3-3 6-3 6 3 6 3" />
        <path d="M6 6s-3 3-3 6 3 6 3 6 3-3 6-3 6 3 6 3 3-3 3-6-3-6-3-6" />
        <circle cx="9" cy="12" r="1" />
        <circle cx="15" cy="12" r="1" />
      </svg>
    ),
  },
  {
    name: "Tiger",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        role="img"
        aria-labelledby="tigerTitle"
        stroke="currentColor"
      >
        <title id="tigerTitle">Tiger Icon</title>
        <circle cx="12" cy="12" r="5" />
        <path d="M8 5s-2 0-3 3 1 5 1 5" />
        <path d="M16 5s2 0 3 3-1 5-1 5" />
        <path d="M10 16h4" />
        <path d="M7 9h10" />
      </svg>
    ),
  },
  {
    name: "Wolf",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        role="img"
        aria-labelledby="wolfTitle"
        stroke="currentColor"
      >
        <title id="wolfTitle">Wolf Icon</title>
        <path d="M6 6s3-3 6-3 6 3 6 3" />
        <path d="M6 6s-3 3-3 6 3 6 3 6 3-3 6-3 6 3 6 3 3-3 3-6-3-6-3-6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    name: "Owl",
    svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        role="img"
        aria-labelledby="owlTitle"
        stroke="currentColor"
      >
        <title id="owlTitle">Owl Icon</title>
        <circle cx="9" cy="10" r="3" />
        <circle cx="15" cy="10" r="3" />
        <path d="M12 2s-3 2-3 5v3h6V7s0-3-3-5z" />
      </svg>
    ),
  },
  // {
  //   name: "Dribbble",
  //   svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //     <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //       <circle cx="12" cy="12" r="10" />
  //       <path d="M4 8s6-4 12 0" />
  //       <path d="M8 4s4 6 0 12" />
  //       <path d="M16 4s-4 6 0 12" />
  //     </svg>
  //   ),
  // },
  // {
  //   name: "GitHub",
  //   svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //     <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //       <path d="M12 2s-4 0-6 4-2 6-2 8 2 4 4 4" />
  //       <path d="M12 2s4 0 6 4 2 6 2 8-2 4-4 4" />
  //       <path d="M10 18s0 2 2 2 2-2 2-2" />
  //     </svg>
  //   ),
  // },

  //   {
  //     name: "Smile",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <circle cx="9" cy="10" r="1" />
  //         <circle cx="15" cy="10" r="1" />
  //         <path d="M8 16s4 3 8 0" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Sad",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <circle cx="9" cy="10" r="1" />
  //         <circle cx="15" cy="10" r="1" />
  //         <path d="M8 16s4-3 8 0" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Laugh",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <circle cx="8" cy="10" r="1" />
  //         <circle cx="16" cy="10" r="1" />
  //         <path d="M7 15s3 3 10 0" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Wink",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <circle cx="8" cy="10" r="1" />
  //         <line x1="14" y1="10" x2="16" y2="10" />
  //         <path d="M7 16s4 3 10 0" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Heart Eyes",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <path d="M8 10l2 2 2-2" />
  //         <path d="M14 10l2 2 2-2" />
  //         <path d="M7 16s4 3 10 0" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Surprised",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <circle cx="9" cy="10" r="1" />
  //         <circle cx="15" cy="10" r="1" />
  //         <circle cx="12" cy="16" r="2" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Angry",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <path d="M8 10l2-2" />
  //         <path d="M14 10l2-2" />
  //         <path d="M8 16s4-3 8 0" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Cool",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <rect x="7" y="9" width="4" height="2" />
  //         <rect x="13" y="9" width="4" height="2" />
  //         <path d="M8 16s4 3 8 0" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Thinking",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <circle cx="9" cy="10" r="1" />
  //         <circle cx="15" cy="10" r="1" />
  //         <path d="M12 16s1 0 1.5 1 .5 1.5 0 2.5" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Crying",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <circle cx="9" cy="10" r="1" />
  //         <circle cx="15" cy="10" r="1" />
  //         <path d="M8 16s4-3 8 0" />
  //         <path d="M7 14l-2 2" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Silly",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <circle cx="8" cy="10" r="1" />
  //         <circle cx="16" cy="10" r="1" />
  //         <path d="M10 16l4-2" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Star Eyes",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <polygon points="8 8 9 10 11 10 9.5 11.5 10 14 8 12.5 6 14 6.5 11.5 5 10 7 10" />
  //         <polygon points="16 8 17 10 19 10 17.5 11.5 18 14 16 12.5 14 14 14.5 11.5 13 10 15 10" />
  //         <path d="M7 16s4 3 10 0" />
  //       </svg>
  //     ),
  //   },
  //   {
  //     name: "Dizzy",
  //     svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //       <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //         <circle cx="12" cy="12" r="10" />
  //         <line x1="8" y1="8" x2="10" y2="10" />
  //         <line x1="10" y1="8" x2="8" y2="10" />
  //         <line x1="14" y1="8" x2="16" y2="10" />
  //         <line x1="16" y1="8" x2="14" y2="10" />
  //         <path d="M7 16s4 3 10 0" />
  //       </svg>
  //     ),
  //   },

  //     {
  //       name: "Addition",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <line x1="12" y1="5" x2="12" y2="19" />
  //           <line x1="5" y1="12" x2="19" y2="12" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Subtraction",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <line x1="5" y1="12" x2="19" y2="12" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Multiplication",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <line x1="5" y1="5" x2="19" y2="19" />
  //           <line x1="19" y1="5" x2="5" y2="19" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Division",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <circle cx="12" cy="6" r="1.5" />
  //           <line x1="5" y1="12" x2="19" y2="12" />
  //           <circle cx="12" cy="18" r="1.5" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Equal",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <line x1="5" y1="10" x2="19" y2="10" />
  //           <line x1="5" y1="14" x2="19" y2="14" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Not Equal",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <line x1="5" y1="10" x2="19" y2="10" />
  //           <line x1="5" y1="14" x2="19" y2="14" />
  //           <line x1="6" y1="5" x2="18" y2="19" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Pi",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M4 12h16" />
  //           <path d="M7 12v-6" />
  //           <path d="M17 12v-6" />
  //           <path d="M10 12a4 4 0 0 0 8 0" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Summation",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M7 5h10l-5 7 5 7H7" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Integral",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M10 5c2 0 4 1 4 4v6c0 3-2 4-4 4" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Square Root",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M3 12l5 5 7-10h6" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Exponent",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M4 12l6 6 6-12" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Factorial",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <text x="6" y="18" fontSize="14" fontWeight="bold">n!</text>
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Infinity",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M8 12a4 4 0 1 1 4-4 4 4 0 1 1 4 4" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Percentage",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <line x1="5" y1="19" x2="19" y2="5" />
  //           <circle cx="6" cy="6" r="2" />
  //           <circle cx="18" cy="18" r="2" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Greater Than",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M6 6l12 6-12 6" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Less Than",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M18 6L6 12l12 6" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Sigma",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <path d="M5 4h14l-7 8 7 8H5" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Absolute Value",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <line x1="8" y1="5" x2="8" y2="19" />
  //           <line x1="16" y1="5" x2="16" y2="19" />
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Logarithm",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <text x="5" y="18" fontSize="14" fontWeight="bold">log</text>
  //         </svg>
  //       ),
  //     },
  //     {
  //       name: "Radians",
  //       svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //         <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //           <circle cx="12" cy="12" r="10" />
  //           <line x1="12" y1="2" x2="12" y2="12" />
  //         </svg>
  //       ),
  //     },

  //       {
  //         name: "Sun",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <circle cx="12" cy="12" r="5" />
  //             <line x1="12" y1="2" x2="12" y2="5" />
  //             <line x1="12" y1="19" x2="12" y2="22" />
  //             <line x1="2" y1="12" x2="5" y2="12" />
  //             <line x1="19" y1="12" x2="22" y2="12" />
  //             <line x1="4.2" y1="4.2" x2="6.5" y2="6.5" />
  //             <line x1="17.5" y1="17.5" x2="19.8" y2="19.8" />
  //             <line x1="4.2" y1="19.8" x2="6.5" y2="17.5" />
  //             <line x1="17.5" y1="6.5" x2="19.8" y2="4.2" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Cloud",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M3 15h15a5 5 0 1 0-10-4 3 3 0 0 0-5 4z" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Rain",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M3 15h15a5 5 0 1 0-10-4 3 3 0 0 0-5 4z" />
  //             <line x1="8" y1="20" x2="8" y2="22" />
  //             <line x1="12" y1="20" x2="12" y2="22" />
  //             <line x1="16" y1="20" x2="16" y2="22" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Thunderstorm",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M3 15h15a5 5 0 1 0-10-4 3 3 0 0 0-5 4z" />
  //             <polygon points="13 14 10 22 16 18 13 26" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Snowflake",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M12 2v20" />
  //             <path d="M5 5l14 14" />
  //             <path d="M19 5l-14 14" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Wind",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M3 12h14a4 4 0 1 0-4-4" />
  //             <path d="M3 18h10a2 2 0 1 0-2-2" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Fog",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <line x1="3" y1="12" x2="21" y2="12" />
  //             <line x1="6" y1="16" x2="18" y2="16" />
  //             <line x1="9" y1="20" x2="15" y2="20" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Tornado",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M3 5h18M6 9h12M9 13h6M11 17h2" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Hurricane",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M12 2c4 0 8 4 8 8s-4 8-8 8 8-4 8-8-4-8-8-8" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Thermometer",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <rect x="10" y="2" width="4" height="12" />
  //             <circle cx="12" cy="18" r="4" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Moon",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M12 2a8 8 0 0 0 0 16 6 6 0 1 1 0-12" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Sunset",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M3 18h18M12 10v6" />
  //             <path d="M8 14l4-4 4 4" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Sunrise",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M3 18h18M12 4v6" />
  //             <path d="M8 10l4-4 4 4" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Rainbow",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M5 16a7 7 0 0 1 14 0" />
  //             <path d="M8 16a4 4 0 0 1 8 0" />
  //             <path d="M11 16a1 1 0 0 1 2 0" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Drizzle",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M3 15h15a5 5 0 1 0-10-4 3 3 0 0 0-5 4z" />
  //             <line x1="8" y1="18" x2="8" y2="20" />
  //             <line x1="12" y1="18" x2="12" y2="20" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Meteor",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M4 4l6 6m0-6-6 6" />
  //             <circle cx="14" cy="14" r="5" />
  //           </svg>
  //         ),
  //       },
  //       {
  //         name: "Umbrella",
  //         svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //           <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //             <path d="M12 2a8 8 0 0 1 8 8H4a8 8 0 0 1 8-8" />
  //             <line x1="12" y1="10" x2="12" y2="22" />
  //           </svg>
  //         ),
  //       },

  //         {
  //           name: "Football",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="12" cy="12" r="10" />
  //               <polygon points="12 2 15 8 21 9 16 14 17 21 12 18 7 21 8 14 3 9 9 8" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Basketball",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="12" cy="12" r="10" />
  //               <path d="M5 5l14 14M5 19l14-14M12 2v20M2 12h20" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Baseball",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="12" cy="12" r="10" />
  //               <path d="M5 5c4 4 4 10 0 14M19 5c-4 4-4 10 0 14" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Tennis",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="12" cy="12" r="10" />
  //               <path d="M4 4l16 16" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Soccer",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="12" cy="12" r="10" />
  //               <polygon points="12 2 16 8 21 9 17 14 18 21 12 18 6 21 7 14 3 9 8 8" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Golf",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="12" cy="18" r="3" />
  //               <path d="M12 15V3l5 2-5 3" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Cricket",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="18" cy="6" r="3" />
  //               <path d="M5 21l14-14" />
  //               <path d="M5 14l5 5" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Volleyball",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="12" cy="12" r="10" />
  //               <path d="M6 6c4 4 4 10 0 14M18 6c-4 4-4 10 0 14" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Badminton",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <path d="M6 18l12-12" />
  //               <circle cx="18" cy="6" r="2" />
  //               <path d="M4 20l6-6" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Hockey",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <path d="M6 20l6-16 6 16" />
  //               <rect x="4" y="20" width="16" height="2" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Table Tennis",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="7" cy="7" r="4" />
  //               <path d="M10 10l7 7" />
  //               <circle cx="17" cy="17" r="2" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Running",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <path d="M4 16l4-6 4 4 4-6 4 6" />
  //               <path d="M4 20h16" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Cycling",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="6" cy="18" r="3" />
  //               <circle cx="18" cy="18" r="3" />
  //               <path d="M8 18h8l-4-8-4 8" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Swimming",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <path d="M2 18c4 2 8 2 12 0 4 2 8 2 12 0" />
  //               <path d="M6 12c2-2 4-2 6 0 2-2 4-2 6 0" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Bowling",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <circle cx="12" cy="16" r="4" />
  //               <path d="M9 2l3 10 3-10" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Skating",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <path d="M4 18h16" />
  //               <path d="M6 18l4-10 4 10" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Surfing",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <path d="M2 20c4-2 8-2 12 0 4-2 8-2 12 0" />
  //               <path d="M10 10l4 4" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Weightlifting",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <rect x="4" y="10" width="16" height="4" />
  //               <path d="M6 6v4m12-4v4" />
  //             </svg>
  //           ),
  //         },
  //         {
  //           name: "Archery",
  //           svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //             <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //               <path d="M12 2v20" />
  //               <path d="M6 12h12" />
  //             </svg>
  //           ),
  //         },

  //           {
  //             name: "Chat",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M3 20l1-4a9 9 0 1 1 4 2l-5 2" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "User",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <circle cx="12" cy="7" r="4" />
  //                 <path d="M6 21v-2a6 6 0 1 1 12 0v2" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Group",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <circle cx="9" cy="7" r="3" />
  //                 <circle cx="15" cy="7" r="3" />
  //                 <circle cx="12" cy="15" r="4" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Like",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M6 12l6-6 6 6" />
  //                 <path d="M6 12v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Comment",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M3 12a9 9 0 0 1 18 0v3l-3 3H6l-3-3v-3" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Share",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <circle cx="6" cy="12" r="3" />
  //                 <circle cx="18" cy="6" r="3" />
  //                 <circle cx="18" cy="18" r="3" />
  //                 <path d="M8.7 10.7l6.6-3.4m0 10l-6.6-3.4" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Notification",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M18 8a6 6 0 0 0-12 0v5l-2 2h16l-2-2V8" />
  //                 <path d="M13 18h-2" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Follow",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <circle cx="12" cy="8" r="4" />
  //                 <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
  //                 <path d="M19 12h4m-2-2v4" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Message",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <rect x="3" y="5" width="18" height="14" rx="2" />
  //                 <path d="M3 5l9 7 9-7" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Profile",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <circle cx="12" cy="7" r="4" />
  //                 <path d="M6 21v-2a6 6 0 1 1 12 0v2" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Tag",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M3 12l6 6 12-12" />
  //                 <circle cx="18" cy="6" r="3" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Location",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M12 2a7 7 0 0 1 7 7c0 5-7 11-7 11S5 14 5 9a7 7 0 0 1 7-7z" />
  //                 <circle cx="12" cy="9" r="2" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Hashtag",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M9 3L7 21m10-18l-2 18M4 8h16M4 16h16" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Live",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <circle cx="12" cy="12" r="3" />
  //                 <path d="M4 12a8 8 0 0 1 16 0M2 12a10 10 0 0 1 20 0" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Video Call",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <rect x="3" y="6" width="14" height="12" rx="2" />
  //                 <path d="M17 10l4-2v8l-4-2" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Phone Call",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M6 3h4l2 5-3 2c1.5 3 4.5 6 8 8l2-3 5 2v4c0 1-1 2-2 2a16 16 0 0 1-16-16c0-1 1-2 2-2" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Globe",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <circle cx="12" cy="12" r="10" />
  //                 <path d="M12 2a10 10 0 0 1 0 20m-5-3a14 14 0 0 0 10 0" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Mail",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <rect x="3" y="5" width="18" height="14" rx="2" />
  //                 <path d="M3 5l9 7 9-7" />
  //               </svg>
  //             ),
  //           },
  //           {
  //             name: "Heart",
  //             svg: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
  //               <svg {...props} viewBox="0 0 24 24" stroke="currentColor">
  //                 <path d="M12 21s-8-6-8-10a6 6 0 0 1 12 0c0 4-8 10-8 10z" />
  //               </svg>
  //             ),
  //           },
];
