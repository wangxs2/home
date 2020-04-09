<template>
  <div class="sa-svg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1720 1200"
      preserveAspectRatio="xMidYMid meet"
      style="width:100%;height:100%"
    >
      
      <defs>
        <clipPath id="animationMask_ZaN9nFmtzh">
          <rect width="1720" height="1200" x="0" y="0" />
        </clipPath>
        <clipPath id="cp_Qe2ve2yL">
          <path d="M0,0 L1720,0 L1720,1200 L0,1200z" />
        </clipPath>
        <clipPath id="cp_VQJiASsR">
          <path d="M0,0 L1720,0 L1720,1200 L0,1200z" />
        </clipPath>
      </defs>

      <g style="clip-path:url(#animationMask_ZaN9nFmtzh)">
        <g class="png" transform="matrix(1,0,0,1,0,0)" opacity="1">
          <image
            width="1720px"
            height="1200px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_6.png"
          />
        </g>
        <g class="png" id="png1" transform="matrix(1,0,0,1,1124,328.5972)" opacity="1">
          <image
            width="122px"
            height="154px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_5.png"
          />
        </g>
        <g class="png" transform="matrix(0.63,0,0,0.82,1135.1,417.62)" opacity="1">
          <image
            width="160px"
            height="268px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_4.png"
          />
        </g>

        <g class="png" id="png2" transform="matrix(0.65,0,0,0.65,865.35,621.5979)" opacity="1">
          <image
            width="122px"
            height="154px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_5.png"
          />
        </g>
        <g class="png" transform="matrix(0.48,0,0,0.69,867.1,702.04)" opacity="1">
          <image
            width="160px"
            height="268px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_4.png"
          />
        </g>
        
        <g class="pngr"  transform="matrix(1,0,0,1,278,517)" opacity="1">
          <image
            width="206px"
            height="222px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_0.png"
          />
        </g>

        <g  transform="matrix(1,0,0,1,518,557)" opacity="1">
          <image
            width="206px"
            height="222px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_0.png"
          />
        </g>

        <g class="png" transform="matrix(1,0,0,1,490,690)" opacity="1">
          <image
            width="152px"
            height="92px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_1.png"
          />
        </g>
        <g class="png" transform="matrix(1,0,0,1,386,644)" opacity="1">
          <image
            width="152px"
            height="92px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_1.png"
          />
        </g>


      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "saSvg",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sa-svg {
  width: 800px;
  height: 600px;
  background: #20273b;
  .pngr{
    transform:matrix(1,0,0,1,278,517);
    // transform:translate3d(30px,0,0);
  }
  #png1 {
    backface-visibility: visible;
    animation: myflip 3s infinite;
  }
  @keyframes myflip {
    from {
      transform: matrix(1, 0, 0, 1, 1124, 318.5972);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    50% {
      transform: matrix(1, 0, 0, 1, 1124, 290);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    to {
      transform: matrix(1, 0, 0, 1, 1124, 318.5972);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  }
}
</style>
