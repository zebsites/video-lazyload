// Create the observer which will watch for the video to enter the viewport, and if it does, will play the video (video sources do not load until play)
const observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          /*  
              Alternatively use 
              entry.target.pause();
              if you want the video to pause once it leaves the viewport
          */
            return;
        } else {
            entry.target.play();
        }
    });
})

// Select the video elements from the page. In this case, selecting the <video> tag, but you can of course use a class as well.
const videos = document.querySelectorAll('video');

// initialize the observer on each video
videos.forEach(video => observer.observe(video));
