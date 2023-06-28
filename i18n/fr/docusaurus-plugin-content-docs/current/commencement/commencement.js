
export default function(){
    const introslide = xlide('.slideintro')
    .addImage(
        '/docusauslide/slidepics/slide1.png'
    ).addImage(
        '/docusauslide/slidepics/slide2.png'
    ).addImage(
        '/docusauslide/slidepics/slide3.png'
    ).addOption(
        'autoplay'
    ).addOption(
        'interval',5
    ).addOption(
        'vertical'
    ).addOption(
        'previews'
    )
}