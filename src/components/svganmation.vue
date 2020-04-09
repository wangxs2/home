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

        <g class="png" id="png3" transform="matrix(1,0,0,1,483,561.9684)" opacity="1">
          <image
            width="82px"
            height="94px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_2.png"
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

        <g class="pngr" transform="matrix(1,0,0,1,278,517)" opacity="1">
          <image
            width="206px"
            height="222px"
            preserveAspectRatio="xMidYMid slice"
            href="../assets/gd/img_3.png"
          />
        </g>

        <g transform="matrix(1,0,0,1,558,527)" opacity="1">
          <image
            width="192px"
            height="326px"
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

        <g id="water1" transform="matrix(2.45,0,0,2.45,669,885)" opacity="1">
          <g transform="matrix(1,0,0,1,0.752,0.787)" opacity="1">
            <path stroke="rgb(72,118,255)" stroke-width="2" d="M0 0 M0,-8.5725 C11.35065135,-8.5725 20.5665,-4.731162749999999 20.5665,0 C20.5665,4.731162749999999 11.35065135,8.5725 0,8.5725 C-11.35065135,8.5725 -20.5665,4.731162749999999 -20.5665,0 C-20.5665,-4.731162749999999 -11.35065135,-8.5725 0,-8.5725z"></path>
          </g>
        </g>
        <g id="water2" transform="matrix(1.7731,0,0,1.7731,669,885)" opacity="1">
          <g transform="matrix(1,0,0,1,0.752,0.787)" opacity="1">
            <path stroke="rgb(72,118,255)" stroke-width="2" d="M0 0 M0,-8.5725 C11.35065135,-8.5725 20.5665,-4.731162749999999 20.5665,0 C20.5665,4.731162749999999 11.35065135,8.5725 0,8.5725 C-11.35065135,8.5725 -20.5665,4.731162749999999 -20.5665,0 C-20.5665,-4.731162749999999 -11.35065135,-8.5725 0,-8.5725z"></path>
          </g>
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
  width: 860px;
  height: 600px;
  background: #20273b;
  #png1 {
    backface-visibility: visible;
    animation: myflip 3s infinite;
  }
  #png2 {
    backface-visibility: visible;
    animation: myst1 3s infinite;
  }
  #png3 {
    backface-visibility: visible;
    animation: flip2 3s infinite;
  }
  #water1{
    backface-visibility: visible;
    animation: water1 1.5s infinite;
    // user-select: none; 
    display: block;
    // animation-delay:0.5s;
  }
  #water2{
    backface-visibility: visible;
    animation: water2 1.5s infinite;
    // user-select: none; 
    // animation-delay:0.5s;
    display: block;
  }
  @keyframes water2 {
    
    from {
      transform: matrix(0.24,0,0,0.24,669,885);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 0;
      
    }
    50%{
      opacity: 1;
    }
    to {
      transform: matrix(1.7731,0,0,1.7731,669,885);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      display: block;
      opacity: 0;
    }
  }
  @keyframes water1 {
    
    from {
      transform: matrix(1.05,0,0,1.05,669,885);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 0;
      
    }
    50%{
      opacity: 1;
    }
    to {
      transform: matrix(2.45,0,0,2.45,669,885);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      display: block;
      opacity: 0;
    }
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
  @keyframes myst1 {
    from {
      transform: matrix(0.65, 0, 0, 0.65, 865.35, 621.5979);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    50% {
      transform: matrix(0.65, 0, 0, 0.65, 865.35, 594);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    to {
      transform: matrix(0.65, 0, 0, 0.65, 865.35, 621.5979);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  }
  @keyframes flip2 {
    from {
      transform: matrix(1, 0, 0, 1, 483, 561.9684);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    50% {
      transform: matrix(1, 0, 0, 1, 483, 460);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    to {
      transform: matrix(1, 0, 0, 1, 483, 561.9684);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  }
}
</style>
