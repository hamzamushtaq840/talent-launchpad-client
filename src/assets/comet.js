import React from 'react';

/**
 * @param {import('./types').VectorAsset} 
 */
function Comet({ props, fill, stroke }) {
  fill = fill || '#FB8500';
  stroke = stroke || '#371A45';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M237.903 337.736l-62.464-9.536-28.117-59.925a21.347 21.347 0 00-19.307-12.267 21.354 21.354 0 00-19.328 12.267L80.57 328.2l-62.464 9.536c-7.893 1.216-14.443 6.741-17.003 14.315a21.322 21.322 0 004.971 21.675l45.803 46.955-10.859 66.56a21.35 21.35 0 008.789 20.864c6.677 4.715 15.488 5.184 22.592 1.237l55.616-30.72 55.595 30.72a21.316 21.316 0 0010.304 2.667 21.39 21.39 0 0012.309-3.904 21.377 21.377 0 008.768-20.864l-10.859-66.56 45.803-46.955a21.326 21.326 0 004.971-21.675 21.37 21.37 0 00-17.003-14.315z" fill={fill} stroke={stroke} strokeWidth="24"></path>
      <path d="M294.569 187.276l-30.165 30.165c-8.341 8.341-8.341 21.845 0 30.165a21.275 21.275 0 0015.083 6.251 21.277 21.277 0 0015.083-6.251l30.165-30.165c8.341-8.341 8.341-21.824 0-30.165-8.342-8.342-21.825-8.342-30.166 0zM198.236 313.744c4.16 4.181 9.643 6.251 15.104 6.251 5.461 0 10.923-2.069 15.061-6.229l5.824-5.803c8.341-8.32 8.341-21.824.021-30.165-8.32-8.363-21.867-8.363-30.165-.021l-5.803 5.803c-8.362 8.319-8.362 21.823-.042 30.164zM385.09 96.756l-30.187 30.165c-8.341 8.341-8.341 21.845 0 30.187a21.275 21.275 0 0015.083 6.251 21.277 21.277 0 0015.083-6.251l30.187-30.165c8.341-8.341 8.341-21.845 0-30.187-8.342-8.32-21.824-8.32-30.166 0zM460.506 72.84a21.277 21.277 0 0015.083-6.251l30.165-30.165c8.341-8.341 8.341-21.824 0-30.165-8.341-8.341-21.824-8.341-30.165 0l-30.165 30.165c-8.341 8.341-8.341 21.824 0 30.165a21.27 21.27 0 0015.082 6.251zM477.568 153.827l-33.685 26.197c-9.301 7.232-10.987 20.629-3.733 29.931 4.203 5.419 10.496 8.256 16.853 8.256a21.23 21.23 0 0013.077-4.501l33.707-26.197c9.28-7.232 10.965-20.629 3.712-29.931-7.232-9.28-20.608-10.965-29.931-3.755zM376.527 232.421l-33.664 26.197c-9.301 7.232-10.965 20.629-3.733 29.931 4.203 5.419 10.496 8.235 16.853 8.235a21.23 21.23 0 0013.077-4.501l33.685-26.197c9.28-7.232 10.944-20.629 3.712-29.931s-20.607-10.987-29.93-3.734zM221.382 171.272c3.947 3.136 8.64 4.672 13.312 4.672 6.272 0 12.459-2.731 16.683-8l26.667-33.323c7.36-9.216 5.867-22.635-3.328-29.995-9.216-7.36-22.613-5.824-29.995 3.328l-26.667 33.323c-7.36 9.216-5.866 22.635 3.328 29.995zM157.34 251.333c3.947 3.136 8.64 4.672 13.312 4.672 6.272 0 12.459-2.731 16.661-8l10.752-13.419c7.381-9.216 5.888-22.635-3.307-29.995-9.237-7.381-22.635-5.845-29.973 3.328l-10.752 13.419c-7.381 9.195-5.888 22.635 3.307 29.995zM354.673 4.682c-9.216-7.36-22.635-5.845-29.995 3.328l-26.645 33.323c-7.36 9.195-5.867 22.613 3.328 29.973a21.207 21.207 0 0013.312 4.672c6.272 0 12.459-2.731 16.683-8l26.645-33.323c7.36-9.195 5.867-22.613-3.328-29.973z" fill={fill} stroke={stroke} strokeWidth="24"></path>
    </svg>
  );
}

export default Comet;