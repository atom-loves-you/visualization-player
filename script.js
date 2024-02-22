Amplitude.init({
  bindings: {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  debug: true,
  visualization: 'michaelbromley_visualization',
  songs: [
    {
      name: "01",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "02",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    },
    {
      name: "00",
      artist: "Atom Loves You",
      album: "Ad Astra per Aspera",
      url: "https://assets.codepen.io/6566924/Ad+Astra+1.mp3",
      cover_art_url: "https://assets.codepen.io/6566924/round-spring-logo.png",
      visualization: "michaelbromley_visualization"
    }
  ],

  waveforms: {
      sample_rate: 50
  },

  visualizations: [
    {
      object: MichaelBromleyVisualization,
      params: {

      }
    }
  ]
});

document.getElementsByClassName('visualization-toggle')[0].addEventListener('click', function(){
  if( this.classList.contains( 'visualization-off' ) ){
    this.classList.remove('visualization-off');
    this.classList.add('visualization-on');
    document.getElementById('large-now-playing-album-art').style.display = 'none';
    document.getElementById('large-visualization').style.display = 'block';
  }else{
    this.classList.remove('visualization-on');
    this.classList.add('visualization-off');
    document.getElementById('large-now-playing-album-art').style.display = 'block';
    document.getElementById('large-visualization').style.display = 'none';
  }
});


document.getElementsByClassName('arrow-up-icon')[0].addEventListener('click', function(){
  document.getElementById('visualizations-player-playlist').style.display = 'block';
});

document.getElementsByClassName('arrow-down-icon')[0].addEventListener('click', function(){
  document.getElementById('visualizations-player-playlist').style.display = 'none';
});