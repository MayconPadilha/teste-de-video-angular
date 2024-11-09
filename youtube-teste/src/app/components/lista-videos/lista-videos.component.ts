import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-videos',
  templateUrl: './lista-videos.component.html',
  styleUrls: ['./lista-videos.component.scss']
})
export class ListaVideosComponent {
  videos = [
    {
      title: "video 1",
      url: "https://rr5---sn-bg0s7n7k.googlevideo.com/videoplayback?expire=1731183632&ei=sG8vZ6a8HYqCvcAPn8KS4Qs&ip=2405%3A4802%3A721b%3A6a30%3A60e3%3A6e3e%3Afe9d%3Aa362&id=o-APxD5B0JstJBrqcheYMT0Jmd7sLETJJ2xg-pLnmtG3sg&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFQAwMrSIw4xuMZonpJykPogl78dSWmCk4RBApZZXzKEkRpsw1u9r3joQFKHyOx8hg7MofYx9RUS&spc=qtApAWk0ZHF84Ewg8ebKmYYJeKqMUox7oDNvc40BdNlzR85jzFV6Ui08oNB-Cjo&vprv=1&svpuc=1&mime=video%2Fmp4&ns=_4IhxzfMJv4PbOGCe4CaY2wQ&rqh=1&gir=yes&clen=3384838&ratebypass=yes&dur=73.421&lmt=1731106021681433&fexp=24350590,24350655,24350675,24350705,24350737,51312688,51326932&c=WEB&sefc=1&txp=6309224&n=Og1BjqGGMmTEEA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAJQUL_2nLR0LqppNKtrWBBlJPf5MpHiNMRRvf0XjLwEBAiEA2oIxJp7Wiy50PzjHRqQmvzmy8dzIrAc2ETg2J2lkufA%3D&title=Arcane%20-%202%C2%AA%20Temporada%20%7C%20Abertura%20Oficial%20%7C%20Netflix%20Brasil&rm=sn-42u-q5qd7e,sn-42u-nbosl7z&rrc=79,79,80&req_id=a6b8f84a6256a3ee&cmsv=e&redirect_counter=3&cm2rm=sn-i3bdz7e&cms_redirect=yes&met=1731170012,&mh=BX&mip=2804:d51:7af3:cd00:1837:f9b5:cb62:cc7d&mm=34&mn=sn-bg0s7n7k&ms=ltu&mt=1731169726&mv=m&mvi=5&pl=40&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgVXdTKyTigzsr8hqEFnaV_aYej168SXxrDEuekZKX260CIA6fd33juH6FLeHgr0sAThnw_WXmrzAWgRKw62-fGE6H",
      imagem: "https://www.kindpng.com/picc/m/736-7369205_play-button-png-pic-video-default-transparent-png.png",
    },
    {
      title: "video 2",
      url: "https://rr5---sn-bg0s7n7k.googlevideo.com/videoplayback?expire=1731183632&ei=sG8vZ6a8HYqCvcAPn8KS4Qs&ip=2405%3A4802%3A721b%3A6a30%3A60e3%3A6e3e%3Afe9d%3Aa362&id=o-APxD5B0JstJBrqcheYMT0Jmd7sLETJJ2xg-pLnmtG3sg&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFQAwMrSIw4xuMZonpJykPogl78dSWmCk4RBApZZXzKEkRpsw1u9r3joQFKHyOx8hg7MofYx9RUS&spc=qtApAWk0ZHF84Ewg8ebKmYYJeKqMUox7oDNvc40BdNlzR85jzFV6Ui08oNB-Cjo&vprv=1&svpuc=1&mime=video%2Fmp4&ns=_4IhxzfMJv4PbOGCe4CaY2wQ&rqh=1&gir=yes&clen=3384838&ratebypass=yes&dur=73.421&lmt=1731106021681433&fexp=24350590,24350655,24350675,24350705,24350737,51312688,51326932&c=WEB&sefc=1&txp=6309224&n=Og1BjqGGMmTEEA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAJQUL_2nLR0LqppNKtrWBBlJPf5MpHiNMRRvf0XjLwEBAiEA2oIxJp7Wiy50PzjHRqQmvzmy8dzIrAc2ETg2J2lkufA%3D&title=Arcane%20-%202%C2%AA%20Temporada%20%7C%20Abertura%20Oficial%20%7C%20Netflix%20Brasil&rm=sn-42u-q5qd7e,sn-42u-nbosl7z&rrc=79,79,80&req_id=a6b8f84a6256a3ee&cmsv=e&redirect_counter=3&cm2rm=sn-i3bdz7e&cms_redirect=yes&met=1731170012,&mh=BX&mip=2804:d51:7af3:cd00:1837:f9b5:cb62:cc7d&mm=34&mn=sn-bg0s7n7k&ms=ltu&mt=1731169726&mv=m&mvi=5&pl=40&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgVXdTKyTigzsr8hqEFnaV_aYej168SXxrDEuekZKX260CIA6fd33juH6FLeHgr0sAThnw_WXmrzAWgRKw62-fGE6H",
      imagem: "https://www.kindpng.com/picc/m/736-7369205_play-button-png-pic-video-default-transparent-png.png",
    },
    {
      title: "video 3",
      url: "https://rr5---sn-bg0s7n7k.googlevideo.com/videoplayback?expire=1731183632&ei=sG8vZ6a8HYqCvcAPn8KS4Qs&ip=2405%3A4802%3A721b%3A6a30%3A60e3%3A6e3e%3Afe9d%3Aa362&id=o-APxD5B0JstJBrqcheYMT0Jmd7sLETJJ2xg-pLnmtG3sg&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&bui=AQn3pFQAwMrSIw4xuMZonpJykPogl78dSWmCk4RBApZZXzKEkRpsw1u9r3joQFKHyOx8hg7MofYx9RUS&spc=qtApAWk0ZHF84Ewg8ebKmYYJeKqMUox7oDNvc40BdNlzR85jzFV6Ui08oNB-Cjo&vprv=1&svpuc=1&mime=video%2Fmp4&ns=_4IhxzfMJv4PbOGCe4CaY2wQ&rqh=1&gir=yes&clen=3384838&ratebypass=yes&dur=73.421&lmt=1731106021681433&fexp=24350590,24350655,24350675,24350705,24350737,51312688,51326932&c=WEB&sefc=1&txp=6309224&n=Og1BjqGGMmTEEA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRgIhAJQUL_2nLR0LqppNKtrWBBlJPf5MpHiNMRRvf0XjLwEBAiEA2oIxJp7Wiy50PzjHRqQmvzmy8dzIrAc2ETg2J2lkufA%3D&title=Arcane%20-%202%C2%AA%20Temporada%20%7C%20Abertura%20Oficial%20%7C%20Netflix%20Brasil&rm=sn-42u-q5qd7e,sn-42u-nbosl7z&rrc=79,79,80&req_id=a6b8f84a6256a3ee&cmsv=e&redirect_counter=3&cm2rm=sn-i3bdz7e&cms_redirect=yes&met=1731170012,&mh=BX&mip=2804:d51:7af3:cd00:1837:f9b5:cb62:cc7d&mm=34&mn=sn-bg0s7n7k&ms=ltu&mt=1731169726&mv=m&mvi=5&pl=40&rms=ltu,au&lsparams=met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=AGluJ3MwRAIgVXdTKyTigzsr8hqEFnaV_aYej168SXxrDEuekZKX260CIA6fd33juH6FLeHgr0sAThnw_WXmrzAWgRKw62-fGE6H",
      imagem: "https://www.kindpng.com/picc/m/736-7369205_play-button-png-pic-video-default-transparent-png.png",
    },
  ]

}
