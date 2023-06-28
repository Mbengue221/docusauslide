
export default function(){
    const introslide = xlide('.slideintro')
    .addImage(
        '/slidepics/slide1.png'
    ).addImage(
        '/slidepics/slide2.png'
    ).addImage(
        '/slidepics/slide3.png'
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