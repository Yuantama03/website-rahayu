// Efek Ketikan
function typingEffect(element, text, speed) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Parallax effect
window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    document.querySelector('.container').style.transform = `translateY(${scrollY * 0.5}px)`;
});

// Tombol Hover Effect
const btn = document.querySelectorAll('.btn');

btn.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "all 0.3s ease";
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = "scale(1)";
    });
});

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Modal Pop-Up
function openModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Pesan Spesial untuk Rahayu!</h2>
            <p>Kamu adalah alasan aku tersenyum setiap hari!</p>
            <button class="close-modal">Tutup</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });
}

// Efek Zoom In pada Foto
const photo = document.querySelector('.photo');

photo.addEventListener('mouseover', () => {
    photo.style.transform = "scale(1.1)";
    photo.style.transition = "all 0.3s ease";
});

photo.addEventListener('mouseout', () => {
    photo.style.transform = "scale(1)";
});

// Tombol Berbagi ke Sosial Media
function shareToSocialMedia(platform) {
    const url = window.location.href;
    let shareUrl = '';
    
    if (platform === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'twitter') {
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=Check out this cool page!`;
    }

    window.open(shareUrl, '_blank');
}

document.querySelector('.share-facebook').addEventListener('click', () => shareToSocialMedia('facebook'));
document.querySelector('.share-twitter').addEventListener('click', () => shareToSocialMedia('twitter'));
