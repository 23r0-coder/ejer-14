document.addEventListener('DOMContentLoaded', function() {
    let tempdata = {
        "did_open": false
    }

    const heart = document.querySelector("#solid-heart");
    const heart_container = document.querySelector(".heart-container");
    const msg_container = document.querySelector("#message-container");
    const heartSong = document.getElementById('heartSong'); // Obtiene el elemento de audio

    heart.addEventListener("click", function() {
        if (tempdata.did_open) {
            return;
        }
        tempdata.did_open = true;
        
        msg_container.style.display = "block";
        heart_container.style.marginTop = "-1.5%";
        
        const auto_css_height = msg_container.scrollHeight + 20; // 20 extra padding
        msg_container.style.height = auto_css_height + "px";

        setTimeout(() => {
            msg_container.style.overflowY = "scroll";
        }, 1500);

        heartSong.play(); // Reproduce la canción al hacer clic en el corazón
    });
});
