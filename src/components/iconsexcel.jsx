function ExcelIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: 0, top: 0 }}
    >
      <rect width="48" height="48" rx="8" fill="#217346" />
      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        fontSize="22"
        fontWeight="bold"
        fill="#fff"
        fontFamily="Arial, Helvetica, sans-serif"
        dominantBaseline="middle"
      >
        X
      </text>
    </svg>
  );
}
