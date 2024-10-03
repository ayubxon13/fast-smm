export default function TikTokIcon({fillColor}: {fillColor: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      imageRendering="optimizeQuality"
      shapeRendering="geometricPrecision"
      viewBox="0 0 512 512"
    >
      <path
        fill={fillColor}
        d="M256 0c141.384 0 256 114.616 256 256S397.384 512 256 512 0 397.384 0 256 114.616 0 256 0zm82.937 174.75c-14.614-9.524-25.152-24.771-28.445-42.535a65.235 65.235 0 01-1.102-11.831h-46.631l-.075 186.877c-.783 20.928-18.009 37.724-39.119 37.724a38.912 38.912 0 01-18.186-4.503c-12.478-6.565-21.016-19.641-21.016-34.691 0-21.614 17.588-39.201 39.194-39.201 4.035 0 7.907.667 11.566 1.809v-47.603c-3.789-.517-7.64-.836-11.566-.836-47.323-.001-85.824 38.499-85.824 85.831 0 29.037 14.504 54.733 36.643 70.272a85.3 85.3 0 0049.189 15.553c47.324 0 85.825-38.5 85.825-85.825v-94.765a110.92 110.92 0 0064.877 20.859v-46.631a64.49 64.49 0 01-35.33-10.504z"
      ></path>
    </svg>
  );
}
