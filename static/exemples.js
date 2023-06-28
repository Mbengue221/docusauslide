
function run (){
    const imgs = [
        '/docusauslide/slidepics/slide1.png',
        '/docusauslide/slidepics/slide2.png',
        '/docusauslide/slidepics/slide3.png',
        '/docusauslide/slidepics/slide4.png',
        '/docusauslide/slidepics/slide5.png',
        '/docusauslide/slidepics/slide6.png',
        '/docusauslide/slidepics/slide7.png'
    ]
    const images = [
        '/docusauslide/slidepics/slide1.avif',
        '/docusauslide/slidepics/slide2.avif',
        '/docusauslide/slidepics/slide3.avif',
        '/docusauslide/slidepics/slide4.avif',
        '/docusauslide/slidepics/slide5.avif'
    ]
    const pics = [
        '/docusauslide/slidepics/slide3.avif',
        '/docusauslide/slidepics/slide4.avif',
        '/docusauslide/slidepics/slide5.avif',
        '/docusauslide/slidepics/slide6.avif',
        '/docusauslide/slidepics/slide7.avif',
        '/docusauslide/slidepics/slide8.avif'
    ]

    if((typeof document) != (typeof undefined)){
            
        const liste_exemples = document.querySelector(' .liste_exemples')
        if(liste_exemples){
            const optionsExemple1 = {
                images:imgs,
                interval:2,
                autoplay:1
            }
            let slide_exemple1 = xlide('.exemple1',optionsExemple1)
    
    
            const optionsExemple2 = {
                images:imgs,
                interval:4,
                autoplay:1,
                vertical:1
            }
            let slide_exemple2 = xlide('.exemple2',optionsExemple2)
    
            const optionsExemple3 = {
                images,
                interval:6,
                autoplay:1,
                vertical:1,
                previews:1
            }
            let slide_exemple3 = xlide('.exemple3',optionsExemple3)
    
            const optionsExemple4 = {
                interval:2,
                autoplay:1,
                rhorizontal:1,
                previews:1
            }
            let slide_exemple4 = xlide().addOptions(optionsExemple4).addImages(images).appendTo('.exemple4')
    
            const optionsExemple5 = {
                images:pics,
                interval:6,
                controls:1
            }
            let slide_exemple5 = xlide('.exemple5',optionsExemple5)
    
            const optionsExemple6 = {
                images:pics,
                interval:4,
                autoplay:1,
                controls:1
            }
            let slide_exemple6 = xlide('.exemple6',optionsExemple6)
    
            const optionsExemple7 = {
                images:pics,
                interval:2,
                autoplay:1,
                controls:1,
                previews:1
            }
            let slide_exemple7 = xlide('.exemple7',optionsExemple7)
    
            const optionsExemple8 = {
                images:images,
                interval:4,
                autoplay:1,
                controls:1,
                slidesPerView:3,
            }
            let slide_exemple8 = xlide('.exemple8',optionsExemple8)
    
    
        }
    }
    }