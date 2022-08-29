

const PlatList = "PLNiNjKlDFu58J1RthSPVdzfyVB1VSTm0d"
const APIURL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=20&playlistId=${PlatList}&key=AIzaSyC3x0nIWqBt0f6mPKkf2-YT-BZhynqnTBA`;

function start(){
    getVideo(renderVideo)
    // handleCreateCourse()
    showAddvideo()
    showNofvideo()
    showMyChannel()
    showUtilities()
    hideUtilities()
    hideDescription()
    showReplyComments()
    handleNumLikeAllComment()
    likeComment()
    handleNumLikeVideo()
    likeVideo()
    writeComment()
    subscribeChannel()
    showCancelSubscribe()
    optionNofChannel()
    chooseNofChannel()
}
start()

function getVideo(callback){
    fetch(APIURL)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}
function renderVideo(videos){
    console.log(videos.items)
    const videoMain = document.querySelector('.video')
    // title video
    const showInforVideoMain = document.querySelector('.infor-video.show-video')

    console.log(showInforVideoMain)
    //show videoMain
    let htmlVideoMain = `<iframe class="video__area" width="853" height="480" src="https://www.youtube.com/embed/${videos.items[0].snippet.resourceId.videoId}?autoplay=1&mute=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    videoMain.innerHTML = htmlVideoMain
    const dayP = videos.items[0].snippet.publishedAt
    const year = dayP.slice(0,4)
    const month = dayP.slice(5,7)
    const day = dayP.slice(8,10)
    // show infor video main
    let htmlInforVideoMain = `<div class="infor-view-and-detail">
                                <p class="infor__hashtag">#5 TRONG DANH MỤC ÂM NHẠC THỊNH HÀNH</p>
                                <h2 class="infor__heading">${videos.items[0].snippet.title}</h2>
                                <span class="infor__view-and-heading">
                                    <b class="infor__views">3.638.315 lượt xem  Đã công chiếu vào ${day} thg ${month}, ${year}</b>
                                    <span class="infor__des-short">${videos.items[0].snippet.title}</span>
                                </span>
                                <div class="infor__detail">
                                    ${videos.items[0].description}
                                </div>
                                <button class="detail__hide-more"><b>Ẩn bớt</b></button>
                                <button class="detail__show-more"><b>...thêm</b></button>
                            </div>
                            <div class="infor__actions">
                                <div class="actions like-video">
                                    <button class="action like__video">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="action__icon style-scope yt-icon" ><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path></g></svg>
                                    </button>
                                    <span class="counts__liked1">1 Tr</span>
                                    <span class="counts__liked2 temp">12222222</span>
                                </div>
                                <div class="actions dislike-video">
                                    <button class="action dislike__video">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="action__icon style-scope yt-icon" ><g class="style-scope yt-icon"><path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z" class="style-scope yt-icon"></path></g></svg>
                                    </button>
                                    <span class="counts__disliked1">Không thích</span>
                                    <span class="counts__disliked2 temp">0</span>
                                </div>
                                <div class="actions">
                                    <button class="action">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="action__icon style-scope yt-icon" ><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z" class="style-scope yt-icon"></path></g></svg>
                                    </button>
                                    <span class="counts__liked1">Chia sẻ</span>
                                </div>
                                <div class="actions">
                                    <button class="action">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="action__icon style-scope yt-icon" ><g class="style-scope yt-icon"><path d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z" class="style-scope yt-icon"></path></g></svg>
                                    </button>
                                    <span class="counts__liked1">Tải xuống</span>
                                </div>
                                <div class="actions">
                                    <button class="action">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="action__icon style-scope yt-icon" ><g class="style-scope yt-icon"><path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z" class="style-scope yt-icon"></path></g></svg>
                                    </button>
                                    <span class="counts__liked1">Tạo đoạn video</span>
                                </div>
                                <div class="actions">
                                    <button class="action">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" ><g class="style-scope yt-icon"><path d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z" class="style-scope yt-icon"></path></g></svg>
                                    </button>
                                    <span class="counts__liked1">Lưu</span>
                                </div>
                                <div class="actions">
                                    <button class="action">
                                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z" class="style-scope yt-icon"></path></g></svg>
                                    </button>
                                </div>
                            </div>  `
                            showInforVideoMain.innerHTML = htmlInforVideoMain
}


