function menuIcons(){
     
    const process_m_link = mlink=>{

        const mlinkarr  = mlink.innerHTML.split('-ico-')
        const mlinktext = mlinkarr[0]
        let truncated = null
        try{
            let truncatedlist = window.document.querySelectorAll(`.text--truncate`)
            truncatedlist.forEach(
                trunc=>{
                    if(trunc.title == mlink.innerHTML){
                        truncated = trunc
                    }
                }
            )
        }catch(e){
            console.log(e)
        }
        const mlinkico  = mlinkarr.length > 1 ? `<i class="fas ${mlinkarr[1]}"></i>` : ''
        mlink.innerHTML = `${mlinkico} ${mlinktext}`
        if(truncated){
            truncated.innerHTML = `${mlinkico} ${mlinktext}`
        }
    
        
    }
    const menu_links = window.document.querySelectorAll(
        '.menu__link'
    )
    const pagination_links = window.document.querySelectorAll(
        '.pagination-nav__label'
    )
    menu_links.forEach(
        process_m_link
    )
    pagination_links.forEach(
        process_m_link
    )
    setTimeout(menuIcons,1000)

}
menuIcons()